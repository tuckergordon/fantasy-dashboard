import { supabase } from '$lib/db/supabase/supabase-client';
import { error, json } from '@sveltejs/kit';

// TODO: type the return value
async function getStandings(leagueId: bigint, startWeek: number = 1, endWeek: number = 17) {
  const { data, error } = await supabase
    .from('schedule')
    .select(
      `
      team_id, 
      win_h2h:win_h2h.sum(), 
      win_median: win_median.sum(),
      points_for: points_for.sum(),
      points_against: points_against.sum(),
      max_points_for: max_points_for.sum(),
      teams:team_id(id, name)
      `,
    )
    .eq('league_id', leagueId)
    .gte('week', startWeek)
    .lte('week', endWeek);

  if (error) {
    console.error('Error fetching standings:', error);
    return null;
  }

  const totalWeeks = endWeek - startWeek + 1;

  return data
    .map((standing) => {
      const wins = standing.win_h2h + standing.win_median;
      const losses = totalWeeks * 2 - wins;

      return {
        teamId: standing.team_id,
        teamName: standing.teams?.name,
        wins,
        losses,
        pf: standing.points_for,
        pa: standing.points_against,
        maxPf: standing.max_points_for,
      };
    })
    .sort((a, b) => b.wins - a.wins);
}

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
