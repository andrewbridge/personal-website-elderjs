<script>
  import HookDetail from '../../components/HookDetail.svelte';
  import BlogSummaryListing from '../../components/BlogSummaryListing.svelte';
  import BlogTeaser from '../../components/BlogTeaser.svelte';
  import ExternalTeaser from '../../components/ExternalTeaser.svelte';
  import Clock from '../../components/Clock.svelte';
  export let data, helpers;

  export let foo;



  // add permalinks to the hook list so we can link to the posts.
  // const hooks = data.hookInterface.map((hook) => ({ ...hook, link: helpers.permalinks.hooks({ slug: hook.hook }) }));
  const blogs = data.markdown.blog.filter(({ frontmatter: { isMicroblog }}) => !isMicroblog).slice(0, 10);
  const feeds = data.markdown.blog.filter(({ frontmatter: { isMicroblog }}) => isMicroblog).slice(0, 20);
  const elsewhere = data.externalData.slice(0, 10);
</script>

<style lang="postcss">
  h2 {
    font-size: 70px;
    line-height: 72px;
    letter-spacing: -5px;
  }

  h2 {
    font-size: 50px;
    line-height: 52px;
    letter-spacing: -3px;
  }
</style>

<svelte:head>
  <title>Andrew Bridge | Blog</title>
</svelte:head>



