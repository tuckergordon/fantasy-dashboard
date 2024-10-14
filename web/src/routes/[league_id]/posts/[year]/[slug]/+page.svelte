<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose mx-auto p-4 pt-12 dark:prose-invert">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p class="italic">{formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="content">
		<svelte:component this={data.content} />
	</div>
</article>
