import { json, error } from '@sveltejs/kit';
import { createClient } from 'contentful';

export async function GET() {
  if (!import.meta.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN) {
    throw error(500, 'Missing VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN ');
  }

  const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: import.meta.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN,
  });
  const data = await client.getEntries({ content_type: 'recap' }).catch((e) => {
    console.error(e);
    throw error(500, 'Problem retrieving blog posts');
  });

  return json(data);
}
