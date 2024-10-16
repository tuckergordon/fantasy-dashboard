import { getMatchups, getStandings, type MatchupGroups, type RosterWithName } from '$lib/sleeper-utils';
import { error } from '@sveltejs/kit';

export async function load({ params: { league_id, year, slug} }) {
	let post;

	try {
		post = await import(
			`../../../../../leagues/${league_id}/posts/${year}/${slug}.md`
		);
	} catch {
		error(404, `Could not find ${slug}`);
	}

	let matchupGroups: MatchupGroups | undefined;
	let standings: RosterWithName[] | undefined

	if (post.metadata.week) {
		standings = await getStandings(fetch, league_id, post.metadata.week);
		matchupGroups = await getMatchups(fetch, league_id, post.metadata.week, standings);
	}

	return {
		content: post.default,
		meta: post.metadata,
		matchupGroups,
		standings,
	};
}
