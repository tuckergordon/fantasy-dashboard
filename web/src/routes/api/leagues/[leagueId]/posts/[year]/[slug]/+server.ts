import { getPost } from '$lib/db/contentful/posts';
import type { Standing, Standings } from '$lib/models/Standings.model';
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

// TODO: figure out a way to render a svelte component instead of this
// weird JSX-like approach
function getStandingsHtml(standings: Standings) {
  const row = (team: Standing, i: number) =>
    (i === 6 ? `<tr><td></td></tr>` : '') +
    `<tr>
      <td>
        ${i + 1}
      </td>
      <td>
        ${team.teamName}
      </td>
      <td>
        ${team.wins}-${team.losses}
      </td>
    </tr>`;
  return `
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Record</th>
          <!-- <th>PF</th>
          <th>PA</th> -->
        </tr>
      </thead>
      <tbody>
        ${standings.map(row).join('')}
      </tbody>
    </table>
  `;
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

  let standings = standingsResponse ? await standingsResponse.json() : null;

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
          return getStandingsHtml(standings);
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
