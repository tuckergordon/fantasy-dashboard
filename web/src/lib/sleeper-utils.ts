import type { Matchup, Roster, User } from './models/Sleeper.model';

export interface RosterWithName extends Roster {
	name: string
}

export async function getStandings(
	// The Svelte `fetch` function for better performance than window.fetch()
	fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>,
	league_id: string,
	// TODO: allow getting standings as of a specific week once we have week by week point totals
	week?: number
): Promise<RosterWithName[]> {
	const usersResponse = await fetch(`https://api.sleeper.app/v1/league/${league_id}/users`);
	const users = (await usersResponse.json()) as User[];

	const teamNameMap = {} as { [user_id: string]: User };
	users.forEach((user) => (teamNameMap[user.user_id] = user));

	const rostersResponse = await fetch(`https://api.sleeper.app/v1/league/${league_id}/rosters`);
	const rosters = (await rostersResponse.json()) as Roster[];

	const standings = rosters
		.map((team) => {
			const name =
				teamNameMap[team.owner_id].metadata.team_name ??
				// Teams who've never actually set their team name just get their username
				'Team ' + teamNameMap[team.owner_id].display_name;

			return {
				...team,
				name
			} as RosterWithName;
		})
		.sort((a, b) => {
			if (a.settings.wins === b.settings.wins) {
				return b.settings.fpts - a.settings.fpts;
			}
			return b.settings.wins - a.settings.wins;
		});

	return standings;
}

export interface MatchupWithRoster extends Matchup {
	roster: RosterWithName
}

export type MatchupGroups = Map<number, MatchupWithRoster[]>

export async function getMatchups(
	// The Svelte `fetch` function for better performance than window.fetch()
	fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>,
	league_id: string,
	week: number,
	rostersWithNames: RosterWithName[]
): Promise<MatchupGroups> {
	const matchupsResponse = await fetch(`https://api.sleeper.app/v1/league/${league_id}/matchups/${week}`);
	const matchups = (await matchupsResponse.json()) as Matchup[];

	const matchupGroups = new Map<number, MatchupWithRoster[]>()

	for (const matchup of matchups) {
		const roster = rostersWithNames.find((roster) => roster.roster_id === matchup.roster_id)

		const matchGroup = matchupGroups.get(matchup.matchup_id)
		const matchupWithRoster = {
			...matchup,
			roster
		} as MatchupWithRoster

		if (matchGroup) {
			matchupGroups.set(matchup.matchup_id, matchGroup.concat(matchupWithRoster))
		} else {
			matchupGroups.set(matchup.matchup_id, [matchupWithRoster])
		}
	}

	return matchupGroups
}
