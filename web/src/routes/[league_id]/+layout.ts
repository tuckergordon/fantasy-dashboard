import { getStandings } from '$lib/sleeper-utils.js';

export async function load({ fetch, params }) {
  const response = await fetch(`/api/leagues/${params.league_id}`);
  const { metadata, posts } = await response.json();

  const standings = await getStandings(fetch, params.league_id);
  const leagueData = await fetch(`https://api.sleeper.app/v1/league/${params.league_id}`);
  const { avatar: league_avatar } = await leagueData.json();

  return { metadata, posts, standings, league_avatar };
}
