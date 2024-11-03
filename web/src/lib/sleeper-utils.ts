import type { Roster, User } from './models/Sleeper.model';

export async function getStandings(
  // The Svelte `fetch` function for better performance than window.fetch()
  fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>,
  leagueId: string,
  // TODO: allow getting standings as of a specific week once we have week by week point totals
  // week?: number,
) {
  const usersResponse = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`);
  const users = (await usersResponse.json()) as User[];

  const teamNameMap = {} as { [user_id: string]: User };
  users.forEach((user) => (teamNameMap[user.user_id] = user));

  const rostersResponse = await fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`);
  const rosters = (await rostersResponse.json()) as Roster[];

  const standings = rosters
    .map((team) => {
      const name =
        teamNameMap[team.owner_id].metadata.team_name ??
        // Teams who've never actually set their team name just get their username
        'Team ' + teamNameMap[team.owner_id].display_name;

      return {
        ...team,
        name,
      };
    })
    .sort((a, b) => {
      if (a.settings.wins === b.settings.wins) {
        return b.settings.fpts - a.settings.fpts;
      }
      return b.settings.wins - a.settings.wins;
    });

  return standings;
}
