<script lang="ts">
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const blogUrl = derived(page, ($page) => $page.url.pathname.split('/').slice(0, -1).join('/'));

  let classesActive = (href: string) =>
    href === $page.url.pathname
      ? 'bg-primary-500 text-on-primary-token hover:text-primary-500'
      : '';
</script>

<nav class="list-nav">
  <ul class="m-0 p-0">
    <!-- TODO: fix data loading error -->
    {#each $page.data.posts ?? [] as post}
      <li>
        <a
          href="{$blogUrl}/{post.slug}"
          class="{classesActive(`${$blogUrl}/${post.slug}`)} no-underline"
          style="white-space: pre-wrap">
          {post.title.replace(' Recap', '')}
        </a>
      </li>
    {/each}
  </ul>
</nav>
