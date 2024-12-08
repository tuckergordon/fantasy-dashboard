import type { Standing } from '$lib/models/Standings.model';
import { supabase } from './supabase-client';

// TODO: type the return value
export async function getStandings(leagueId: bigint, startWeek: number = 1, endWeek: number = 17) {
  const { data, error } = await supabase
    .from('schedule')
    .select(
      `
      win_h2h:win_h2h.sum(), 
      win_median: win_median.sum(),
      points_for: points_for.sum(),
      points_against: points_against.sum(),
      max_points_for: max_points_for.sum(),
      teams(
        name, 
        user_id, 
        users(
          name
        )
      )
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
        // @ts-expect-error - teams is not typed correctly yet
        teamName: standing.teams.name,
        // @ts-expect-error - teams is not typed correctly yet
        userId: standing.teams.user_id,
        // @ts-expect-error - teams is not typed correctly yet
        userName: standing.teams.users.name,
        wins,
        losses,
        pf: standing.points_for,
        pa: standing.points_against,
        maxPf: standing.max_points_for,
      } as Standing;
    })
    .sort((a, b) => b.wins - a.wins);
}
