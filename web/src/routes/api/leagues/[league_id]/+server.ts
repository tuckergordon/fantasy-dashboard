import type { Post } from '$lib/models/Post.model';
import { json } from '@sveltejs/kit';

async function getMetadata(league_id: string) {
	const paths = import.meta.glob('/src/leagues/*/meta.json', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		if (!path.includes(league_id)) continue;

		// Check for metadata
		if (file && typeof file === 'object' && 'default' in file) {
			return file.default;
		}
	}
}

async function getPosts(league_id: string) {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/leagues/*/posts/*/*.md', { eager: true });

	// console.log(paths);
	for (const path in paths) {
		const file = paths[path];

		// Filter out other leagues. Can't use variables in the glob so have to do it
		// this way..
		if (!path.includes(league_id)) continue;

		// Get the slug from the post
		const slug = path.split('/').at(-1)?.replace('.md', '');

		// Check for metadata
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			if (post.published) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET({ params }) {
	const metadata = await getMetadata(params.league_id);
	const posts = await getPosts(params.league_id);
	return json({ metadata, posts });
}
