import { getAllPosts } from '$lib/utils/contenful-utils';
import { json } from '@sveltejs/kit';

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

export async function GET({ params }) {
  const leagueMetadata = await getMetadata(params.leagueId);
  const posts = await getAllPosts(params.leagueId);
  return json({ leagueMetadata, posts });
}
