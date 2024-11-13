import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { error, json } from '@sveltejs/kit';
import { createClient } from 'contentful';

async function getPost(leagueId: string, slug: string) {
  const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: import.meta.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN,
  });

  let data = await client
    .getEntries({ content_type: 'recap', 'fields.leagueId': leagueId, 'fields.slug': slug })
    .catch((e) => {
      console.error(e);
      throw error(500, 'Problem retrieving blog posts');
    });

  return data.items[0];
}

export async function GET({ params }) {
  const post = await getPost(params.leagueId, params.slug);

  const createdAt = new Date(post.sys.createdAt);
  const updatedAt = new Date(post.sys.updatedAt);
  let { body, image, ...meta } = post.fields;

  if (image) {
    image = image.map((asset) => 'https:' + asset.fields.file.url);
  }
  const rawContent = post.fields.body;
  const content = await documentToHtmlString(rawContent);
  return json({ ...meta, content, image, createdAt, updatedAt });
}
