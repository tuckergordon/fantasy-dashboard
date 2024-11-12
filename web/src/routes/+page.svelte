<script lang="ts">
  let { data } = $props();

  console.log('Python API:');
  console.log(JSON.stringify(data.pythonTestMsg, null, 2));

  console.log('Database response (via python):');
  console.log(JSON.stringify(data.dbTest, null, 2));
</script>

<svelte:head>
  <title>'mmish</title>
</svelte:head>

<section class="prose mx-auto mt-24 max-w-md text-center dark:prose-invert">
  <img src="images/mmish.png" class="mx-auto" alt="'mmish logo" />
  <h1>Welcome to <span class="italic text-secondary-500 dark:text-primary-500">'mmish</span></h1>
  <p>Your home for league-specific content and stats, created by your 'mmish and friends.</p>
</section>

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
  <h2 class="text-center">Leagues</h2>
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
