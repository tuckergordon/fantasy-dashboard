<script lang="ts">
  import '../styles/app.postcss';
  import Navbar from '$lib/components/Navbar.svelte';

  import { afterNavigate } from '$app/navigation';

  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';

  let { children, data } = $props();
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  // Workaround to ensure page goes back to the top when navigating
  // between routes. More info: https://github.com/sveltejs/kit/issues/2733#issuecomment-1543863772
  afterNavigate(() => {
    document.body.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:image" content={data.meta.image} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:site_name" content={data.meta.site_name} />
</svelte:head>

<div class="grid grid-rows-[auto_1fr_auto]">
  <header class="sticky top-0 z-10"><Navbar /></header>
  {@render children?.()}
</div>
