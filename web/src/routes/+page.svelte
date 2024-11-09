<script lang="ts">
  import { onMount } from 'svelte';

  let { data } = $props();

	onMount(() => {

		// fetch('https://python-hello-world-nu-lilac.vercel.app/api/').then(res => {
		// 	res.json().then(text => console.log(text));
		// })
	})
</script>

<!-- <svelte:head>
	<title>{config.title}</title>
</svelte:head> -->

<!-- Posts -->
<!-- <section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section> -->

<section class="prose mx-auto p-4 pt-12 dark:prose-invert">
  <ul>
    {#each data.leagues as league}
      <li>
        <a href={league.id}>{league.name}</a>
      </li>
    {/each}
  </ul>
</section>

<!-- <style>
	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style> -->
