export async function load({ fetch, params }) {
  const response = await fetch(`/api/leagues/${params.leagueId}`);
  const { leagueMetadata, posts } = await response.json();

  const standingsData = await fetch(`/api/leagues/${params.leagueId}/standings`);
  const standings = await standingsData.json();
  const leagueData = await fetch(`https://api.sleeper.app/v1/league/${params.leagueId}`);
  const { avatar: leagueAvatar } = await leagueData.json();

  return { leagueMetadata, posts, standings, leagueAvatar };
}
