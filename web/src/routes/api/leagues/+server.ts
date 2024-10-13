import { json } from '@sveltejs/kit';

async function getLeagues() {
	const paths = import.meta.glob('/src/leagues/*/meta.json', { eager: true });
	const leagues = [];

	for (const path in paths) {
		const file = paths[path];

		// Check for metadata
		if (file && typeof file === 'object' && 'default' in file) {
			leagues.push(file.default);
		}
	}
	return leagues;
}

export async function GET() {
	const leagues = await getLeagues();
	return json(leagues);
}
