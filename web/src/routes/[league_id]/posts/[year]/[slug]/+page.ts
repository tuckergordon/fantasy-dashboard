import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await import(
      `../../../../../leagues/${params.league_id}/posts/${params.year}/${params.slug}.md`
    );

    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (e) {
    console.error(e);
    error(404, `Could not find ${params.slug}`);
  }
}
