import { error, json } from '@sveltejs/kit';
import { createClient } from 'contentful';

async function getMetadata(leagueId: string) {
  const paths = import.meta.glob('/src/leagues/*/meta.json', { eager: true });

  for (const path in paths) {
    const file = paths[path];

    if (!path.includes(leagueId)) continue;

    // Check for metadata
    if (file && typeof file === 'object' && 'default' in file) {
      return file.default;
    }
  }
}

async function getPosts(leagueId: string) {
  const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: import.meta.env.VITE_CONTENTFUL_CLIENT_ACCESS_TOKEN,
  });

  const data = await client
    .getEntries({ content_type: 'recap', 'fields.leagueId': leagueId })
    .catch((e) => {
      console.error(e);
      throw error(500, 'Problem retrieving blog posts');
    });

  return data.items;
}

export async function GET({ params }) {
  const leagueMetadata = await getMetadata(params.leagueId);
  const posts = await getPosts(params.leagueId);
  return json({ leagueMetadata, posts });
}
