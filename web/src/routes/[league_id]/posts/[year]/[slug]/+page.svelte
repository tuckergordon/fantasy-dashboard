<script lang="ts">
  import { formatDate } from '$lib/utils';
  import { tocCrawler } from '@skeletonlabs/skeleton';

  export let data;
</script>

<!-- SEO -->
<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:image" content={data.meta.image} />
</svelte:head>

<article class="prose dark:prose-invert mx-auto">
  <hgroup>
    <h1>{data.meta.title}</h1>
    <p class="italic">{formatDate(data.meta.date)}</p>
    {#if data.meta.image}
      <img src={data.meta.image} alt="{data.meta.title} image" />
    {/if}
  </hgroup>

  <div
    class="content"
    use:tocCrawler={{
      mode: 'generate',
      queryElements: 'h2',
      // need IDs to be unique otherwise ToC won't update between pages
      key: data.url,
    }}
  >
    <svelte:component this={data.content} />
  </div>
</article>
