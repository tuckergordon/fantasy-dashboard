<script lang="ts">
	import { page } from '$app/stores';
	import Standings from '$lib/components/Standings.svelte';

	export let data;
	const { metadata, posts, standings } = data;
</script>

<div class="prose mx-auto p-4 pt-12 dark:prose-invert">
	<h1>{metadata.name}</h1>

	<section>
		<h2>Standings</h2>
		<Standings {standings} />
	</section>

	<!-- Posts -->
	<section>
		<ul class="posts">
			<h2>Recaps</h2>
			{#each posts as post}
				<li class="post">
					<!-- TODO: don't hard code year -->
					<a href="{$page.url.pathname}/posts/2024/{post.slug}" class="title">{post.title}</a>
				</li>
			{/each}
		</ul>
	</section>
</div>
