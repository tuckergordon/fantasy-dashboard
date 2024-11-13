import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
  try {
    const postResponse = await fetch(
      `/api/leagues/${params.leagueId}/posts/${params.year}/${params.slug}`,
    );
    const post = await postResponse.json();

    return {
      post,
    };
  } catch (e) {
    console.error(e);
    error(404, `Could not find ${params.slug}`);
  }
}
