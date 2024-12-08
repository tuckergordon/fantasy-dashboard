import { StandingsTable } from '$lib/components/StandingsTable.js';
import { getPost } from '$lib/db/contentful/posts';
import { documentToHtmlString, type RenderNode } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { json } from '@sveltejs/kit';

function extractWeekNumber(slug: string): number | null {
  const match = slug.match(/week-(\d+)/);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return null;
}

export async function GET({ params, fetch }) {
  // Technically could pull this out of the post, but then we wouldn't be able
  // to query supabase until contentful responded
  const week = extractWeekNumber(params.slug);

  // Calls to supabase and contentful are independent
  const [post, standingsResponse] = await Promise.all([
    getPost(params.leagueId, params.slug),
    week
      ? fetch(
          `/api/leagues/${params.leagueId}/standings?startWk=1&endWk=${extractWeekNumber(params.slug)}`,
        )
      : Promise.resolve(null),
  ]);

  const postId = post.sys.id;
  const createdAt = new Date(post.sys.createdAt);
  const updatedAt = new Date(post.sys.updatedAt);
  const { body, ...meta } = post.fields;

  const standings = standingsResponse ? await standingsResponse.json() : null;

  let image = '';
  const renderNode: RenderNode = {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, description } = node.data.target.fields;
      // Save the URL of the first image so that we can use it as the preview
      // image for the post (e.g. what shows up when you text a link to the post)
      if (!image) {
        image = file.url;
      }
      return `<img src="https:${file.url}" height="${file.details.image.height}" width="${file.details.image.width}" alt="${description}"/>`;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      switch (node.data.target.fields.type) {
        case 'standings':
          return StandingsTable(standings);
        default:
          return '';
      }
    },
  };

  const options = {
    renderNode,
  };

  const content = documentToHtmlString(body, options);
  return json({ ...meta, content, createdAt, updatedAt, postId, image });
}
