<script>
  import HookDetail from '../../components/HookDetail.svelte';
  import BlogTeaser from '../../components/BlogTeaser.svelte';
  import Clock from '../../components/Clock.svelte';
  export let data, helpers;

  export let foo;

  // add permalinks to the hook list so we can link to the posts.
  // const hooks = data.hookInterface.map((hook) => ({ ...hook, link: helpers.permalinks.hooks({ slug: hook.hook }) }));
</script>

<style>
  @media (min-width: 768px) {
    .latest {
      display: grid;
      grid-template: repeat(2, auto) / repeat(3, 1fr);
      row-gap: 10px;
      column-gap: 30px;
      & h2 {
        margin-bottom: .25em;
      }
      & .blog {
        grid-area: 1 / 1 / 2 / 3;
      }
      & .elsewhere {
        grid-area: 2 / 1 / 3 / 3;
      }
      & .feed {
        grid-area: 1 / 3 / 3 / 4;
      }
    }
  }

  .about {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .hydrate {
      display: grid;
      grid-template-columns: 80% 20%;
    }
  }

  .hooks {
    display: grid;
    grid-template-columns: 100%;
  }

  @media (min-width: 768px) {
    .hooks {
      grid-template-columns: 50% 50%;
    }
  }
</style>

<svelte:head>
  <title>Andrew Bridge | Latest</title>
</svelte:head>

<h1>Latest</h1>

<div class="latest">
  <div class="blog">
    <h2>Blog</h2>
    <div class="entries">
      {#each data.markdown.blog as blog}
        <BlogTeaser {blog} {helpers} />
      {/each}
    </div>
  </div>
  <div class="elsewhere">
    <h2>Elsewhere</h2>
    <div class="entries">
      {#each data.markdown.blog as blog}
        <BlogTeaser {blog} {helpers} />
      {/each}
    </div>
  </div>
  <div class="feed">
    <h2>Feed</h2>
    <div class="entries">
      {#each data.markdown.blog as blog}
        <BlogTeaser {blog} {helpers} />
      {/each}
    </div>
  </div>
</div>

<div class="about">
  <h2>About This Template</h2>
  <p>
    This example project is made up of 4 routes; you can find them by looking within the <span
      class="code">./src/routes/</span> folder. They are:
  </p>

  <ul>
    <li>Home - The page you are on.</li>
    <li>
      Blog - Linked from above, but you can also see a blog post by checking out: <a
        href={helpers.permalinks.blog({ slug: 'getting-started' })}>'Getting Started'</a> .
    </li>
    <li>
      Hooks - These are how you customize Elder.js. Details are below, and we've used the <span
        class="code">hookInterface</span> to build out dedicated pages for each hook as well.
    </li>
  </ul>

  <p>
    The goal in showing off these 3 routes is to give you enough of an example to see how a site is built with Elder.js
    (but one that isn't too complex to overwhelm you).
  </p>
  <h3>Development Environment:</h3>
  <p>
    If you ran <span class="code">npm start</span> to see this page, we recommend you stop that command. Instead, open two
    terminals and run:
  </p>
  <ol>
    <li>
      <span class="code">npm run dev:server</span> - This uses nodemon to restart the development server when files change.
    </li>
    <li>
      <span class="code">npm run dev:rollup</span> - This uses Rollup to recompile your Svelte templates as you change them.
    </li>
  </ol>

  <p>
    <strong>Note:</strong> Make sure you also check out <code>npm run build</code>, which will statically generate this same
    site so that it can be deployed with a static site host such as Netlify, Cloudflare Workers, Vercel, or S3.
  </p>
</div>

<div class="hydrate">
  <div class="left">
    <h2>Partial Hydration:</h2>
    <p>Svelte.js shines at bringing interactivity to otherwise static websites.</p>
    <p>
      By default, Elder.js statically renders Svelte components, only mounting them in the browser when it encounters a
      Svelte component which includes the
      <!-- Note: the actual prop is 'hydrate-client={}' but Svelte doesn't render empty objects-->
      <code>hydrate-client={JSON.stringify({})}</code> prop.
    </p>
    <p>
      The <a href="https://svelte.dev/examples#clock">clock</a> on this page is an example of a component that has been
      hydrated on the client.
    </p>
    <p>This approach makes it easy to build SEO friendly websites, with Svelte for interactivity when needed.</p>
    <p>By default all hydrated components are lazy loaded with an intersection observer.</p>
  </div>
  <div class="right">
    <Clock hydrate-client={{}} />
  </div>
</div>

<h2>The Hook Interface</h2>

<p>
  Once you've digested the guides above and understand how to handle client hydration, we encourage you to explore the
  hook interface below.
</p>
<p>
  Hooks are the primary way to customize Elder.js and the list below outlines exactly what each hook can be used for.
</p>
<div />
<img
  src="https://elderguide.com/images/elderjs-hooks-v100.png"
  alt="Elder.js hook Lifecycle"
  style="max-width:100%; margin:1rem 0;" />

<!-- <div class="hooks">
  {#each hooks as hook, i}
    <HookDetail {hook} {i} hookEntityDefinitions={data.hookEntityDefinitions} />
  {/each}
</div> -->
