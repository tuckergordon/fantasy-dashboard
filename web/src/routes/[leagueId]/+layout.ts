import { getStandings } from '$lib/utils/sleeper-utils.js';

export async function load({ fetch, params }) {
  const response = await fetch(`/api/leagues/${params.leagueId}`);
  const { leagueMetadata, posts } = await response.json();

  const standings = await getStandings(fetch, params.leagueId);
  const leagueData = await fetch(`https://api.sleeper.app/v1/league/${params.leagueId}`);
  const { avatar: leagueAvatar } = await leagueData.json();

  return { leagueMetadata, posts, standings, leagueAvatar };
}
