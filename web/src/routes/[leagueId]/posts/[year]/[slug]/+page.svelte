<script lang="ts">
  import { page } from '$app/stores';
  import PostsListNav from '$lib/components/PostsListNav.svelte';
  import { formatDate } from '$lib/utils';
  import Icon from '@iconify/svelte';
  import { tocCrawler, popup } from '@skeletonlabs/skeleton';

  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:image" content={data.meta.image} />
</svelte:head>

<article class="prose dark:prose-invert mx-auto mb-8">
  <hgroup>
    <div class="flex items-center justify-between">
      <span class="shrink-0 italic">{formatDate(data.meta.date)}</span>
      <!-- popup button -->
      <button
        class="btn hover:variant-soft-primary lg:hidden"
        use:popup={{ event: 'click', target: 'features' }}>
        <span>Other Weeks</span>
        <Icon icon="material-symbols:keyboard-arrow-down" />
      </button>
      <!-- popup -->
      <div class="card w-60 p-2 shadow-xl" data-popup="features">
        <PostsListNav />
      </div>
    </div>
    <h1>{data.meta.title}</h1>
    {#if data.meta.image}
      <img src={data.meta.image} alt="{data.meta.title} image" />
    {/if}
  </hgroup>

  <div
    class="content mb-8"
    use:tocCrawler={{
      mode: 'generate',
      queryElements: 'h2',
      // need IDs to be unique otherwise ToC won't update between pages
      key: $page.url.pathname,
    }}>
    <svelte:component this={data.content} />
  </div>

  <a
    href="https://github.com/tuckergordon/fantasy-dashboard/blob/main/web/src/leagues{$page.url
      .pathname}.md"
    class="btn text-primary-500 p-0 no-underline hover:underline">
    <Icon icon="material-symbols:edit" />
    <span>Edit this page</span>
  </a>
</article>
