<script lang="ts">
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const blogUrl = derived(page, ($page) => $page.url.pathname.split('/').slice(0, -1).join('/'));
  $: classesActive = (href: string) =>
    href === $page.url.pathname
      ? 'bg-primary-500 text-on-primary-token hover:text-primary-500'
      : '';
</script>

<nav class="list-nav">
  <div class="p-4 pt-0 font-bold">Recaps</div>
  <ul>
    <!-- TODO: fix data loading error -->
    {#each $page.data.posts ?? [] as post}
      <li>
        <a
          href="{$blogUrl}/{post.slug}"
          class={classesActive(`${$blogUrl}/${post.slug}`)}
          style="white-space: pre-wrap"
        >
          {post.title}
        </a>
      </li>
    {/each}
  </ul>
</nav>
