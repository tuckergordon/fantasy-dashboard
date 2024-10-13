export async function load({ fetch, params }) {
	const response = await fetch(`api/leagues/${params.league_id}`);
	const { metadata, posts } = await response.json();

	const usersResponse = await fetch(`https://api.sleeper.app/v1/league/${params.league_id}/users`);
	const users = await usersResponse.json();
	const teamNameMap = {};
	users.forEach((user) => (teamNameMap[user.user_id] = user));

	const rostersResponse = await fetch(
		`https://api.sleeper.app/v1/league/${params.league_id}/rosters`
	);
	const rosters = await rostersResponse.json();

	console.log(rosters);

	const standings = rosters
		.map((team) => {
			const name =
				teamNameMap[team.owner_id].metadata.team_name ??
				// Teams who've never actually set their team name just get their username
				'Team ' + teamNameMap[team.owner_id].display_name;

			return {
				...team,
				name
			};
		})
		.sort((a, b) => {
			if (a.settings.wins === b.settings.wins) {
				return b.settings.fpts - a.settings.fpts;
			}
			return b.settings.wins - a.settings.wins;
		});

	return { metadata, posts, standings };
}
