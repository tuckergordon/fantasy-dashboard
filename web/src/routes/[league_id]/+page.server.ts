export async function load({ fetch, params }) {
	const response = await fetch(`api/leagues/${params.league_id}`);

	const { metadata, posts } = await response.json();
	return { metadata, posts };
}
