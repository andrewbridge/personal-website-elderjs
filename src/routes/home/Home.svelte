<script>
  import AvatarSticker from '../../components/AvatarSticker.svelte';
  import AboutBlurb from '../../components/AboutBlurb.svelte';
  import BlogSummaryListing from '../../components/BlogSummaryListing.svelte';
  import SocialLinks from '../../components/SocialLinks.svelte';

  import Clock from '../../components/Clock.svelte';
  export let data, helpers;

  export let foo;



  // add permalinks to the hook list so we can link to the posts.
  // const hooks = data.hookInterface.map((hook) => ({ ...hook, link: helpers.permalinks.hooks({ slug: hook.hook }) }));

</script>

<style lang="postcss">
  h2 {
    font-size: 70px;
    line-height: 72px;
    letter-spacing: -5px;
  }

  h3 {
    font-size: 50px;
    line-height: 52px;
    letter-spacing: -3px;
  }

  @media (min-width: 768px) {
    .latest {
      display: grid;
      grid-template: repeat(2, auto) / repeat(3, 1fr);
      row-gap: 10px;
      column-gap: 30px;
      & h2 {
        margin-bottom: .25em;
      }
      & :global(.blog) {
        grid-area: 1 / 1 / 2 / 3;
      }
      & :global(.blog .entries) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      & :global(.blog .entries .entry) {
        width: 47.5%;
        &:first-child {
          width: 100%;
          margin-bottom: 1em;
        }
      }
      & :global(.blog .entries .entry:first-child a), & :global(.blog .entries .entry:first-child p) {
        font-size: 1.2em;
      }
      & :global(.elsewhere) {
        grid-area: 2 / 1 / 3 / 3;
      }
      & :global(.elsewhere .entries .entry):first-child {
        width: 100%;
        margin-bottom: 1em;
      }
      & :global(.elsewhere .entries .entry:first-child a), & :global(.elsewhere .entries .entry:first-child p) {
          font-size: 1.2em;
      }
      & :global(.feed) {
        grid-area: 1 / 3 / 3 / 4;
      }
    }
  }

  aside {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2em;
    & .blurb {
      margin-left: 3em;
    }
  }
</style>

<svelte:head>
  <title>Andrew Bridge | Latest</title>
</svelte:head>

<h2>Latest</h2>

<div class="latest">
  <BlogSummaryListing order={[0,1,2]} limits={[3,3,10]} {helpers} {data} />
  <!-- <div class="blog">
    <h3>Blog</h3>
    <div class="entries">
      {#each blogs as blog}
        <BlogTeaser {blog} {helpers} />
      {/each}
    </div>
  </div>
  <div class="elsewhere">
    <h3>Elsewhere</h3>
    <div class="entries">
      {#each elsewhere as post}
        <ExternalTeaser {post} />
        <!- - <BlogTeaser {blog} {helpers} /> - ->
      {/each}
    </div>
  </div>
  <div class="feed">
    <h3>Feed</h3>
    <div class="entries">
      {#each feeds as blog}
        <BlogTeaser {blog} {helpers} />
      {/each}
    </div>
  </div> -->
</div>

<hr />

<aside>
  <AvatarSticker />
  <div class="blurb">
    <AboutBlurb />
  </div>
</aside>

<SocialLinks />
