<script lang="ts">
	import { page } from '$app/stores';
	import Standings from '$lib/components/standings.svelte';

	export let data;
	const { metadata, posts, standings } = data;
</script>

<h1>{metadata.name}</h1>

<section>
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
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
