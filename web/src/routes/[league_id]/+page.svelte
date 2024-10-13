<script lang="ts">
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
				<a href="/{post.slug}" class="title">{post.title}</a>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
