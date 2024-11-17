<script lang="ts">
  import { page } from '$app/stores';
  import PostsListNav from '$lib/components/PostsListNav.svelte';
  import { formatDate } from '$lib/utils/date-utils';
  import Icon from '@iconify/svelte';
  import { tocCrawler, popup } from '@skeletonlabs/skeleton';

  let { data } = $props();
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.post.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.post.title} />
  <!-- TODO: use first image in content -->
  <!-- <meta property="og:image" content={data.post.image} /> -->
</svelte:head>

<article class="prose dark:prose-invert mx-auto mb-8">
  <hgroup>
    <div class="flex items-center justify-between">
      <span class="shrink-0 italic">{formatDate(data.post.createdAt)}</span>
      <!-- TODO: add updatedAt? -->
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
    <h1>{data.post.title}</h1>
  </hgroup>

  <div
    class="content mb-8"
    use:tocCrawler={{
      mode: 'generate',
      queryElements: 'h2',
      // need IDs to be unique otherwise ToC won't update between pages
      key: $page.url.pathname,
    }}>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html data.post.content}
  </div>

  <!-- TODO: add a link that takes you to edit page on contentful -->
  <a
    href="https://app.contentful.com/spaces/u8rkbtuumsz9/entries/{data.post.postId}"
    class="btn text-primary-500 p-0 no-underline hover:underline"
    target="_blank">
    <Icon icon="material-symbols:edit" />
    <span>Edit this page</span>
  </a>
</article>
