<script>
  import SiteHeader from '../components/SiteHeader.svelte';

  export let templateHtml, settings;
</script>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
</svelte:head>
<SiteHeader />
<main class="container">
  {@html templateHtml}
</main>
