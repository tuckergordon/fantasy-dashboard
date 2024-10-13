<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	const { metadata, posts } = data;
</script>

<h1>{metadata.name}</h1>

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
