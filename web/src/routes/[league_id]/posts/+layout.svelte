<script>
  import BlogSidenav from '$lib/components/BlogSidenav.svelte';
  import { TableOfContents } from '@skeletonlabs/skeleton';
</script>

<div class="container mx-auto grid grid-cols-1 pt-6 lg:grid-cols-[200px_minmax(0px,_1fr)_200px]">
  <!-- 100px leaves room for navbar -->
  <aside class="sticky top-[100px] col-span-1 hidden h-screen scroll-mt-[100px] lg:block">
    <BlogSidenav />
  </aside>

  <main class="col-span-1 space-y-4 px-8 py-0">
    <slot />
  </main>

  <aside class="sticky top-[100px] col-span-1 hidden h-screen scroll-mt-[100px] lg:block">
    <TableOfContents>On The Page</TableOfContents>
  </aside>
</div>
