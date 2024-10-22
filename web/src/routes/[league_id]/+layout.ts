import { getStandings } from '$lib/sleeper-utils.js';

export async function load({ fetch, params }) {
  const response = await fetch(`/api/leagues/${params.league_id}`);
  const { metadata, posts } = await response.json();

  const standings = await getStandings(fetch, params.league_id);

  return { metadata, posts, standings };
}
