export async function load({ fetch }) {
	const response = await fetch('api/leagues');

	const leagues = await response.json();
	return { leagues };
}
