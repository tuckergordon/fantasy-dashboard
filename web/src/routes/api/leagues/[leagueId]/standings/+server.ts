import { getStandings } from '$lib/db/supabase/standings';
import { error, json } from '@sveltejs/kit';

export async function GET({ params, url }) {
  const leagueId = BigInt(params.leagueId);
  const startWeek = parseInt(url.searchParams.get('startWk') ?? '1');
  const endWeek = parseInt(url.searchParams.get('endWk') ?? '17');

  if (isNaN(Number(leagueId)) || isNaN(startWeek) || isNaN(endWeek)) {
    return error(400, 'Invalid league ID or week number');
  }
  if (startWeek > endWeek || startWeek < 1 || endWeek > 17) {
    return error(400, 'Invalid week range');
  }

  const standings = await getStandings(leagueId, startWeek, endWeek);
  if (!standings) {
    return error(500, 'Error fetching standings');
  }

  return json(standings);
}
