<script lang="ts">
  import { page } from '$app/stores';
  import Standings from '$lib/components/Standings.svelte';

  let { data } = $props();
  const { metadata, posts, standings } = data;
</script>

<div class="prose mx-auto p-4 pt-12 dark:prose-invert">
  <section>
    {#if $page.data?.league_avatar}
      <img
        src="https://sleepercdn.com/avatars/{$page.data.league_avatar}"
        class="mx-auto h-64 rounded-full"
        alt={$page.data.metadata.name} />
    {/if}
    <h1>{metadata.name}</h1>
  </section>

  <section class="justify-between md:flex">
    <div>
      <h2>Standings</h2>
      <Standings {standings} />
    </div>

    <ul class="posts mt-0">
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
