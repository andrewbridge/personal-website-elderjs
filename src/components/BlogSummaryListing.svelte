<script>
    import BlogTeaser from './BlogTeaser.svelte';
    import ExternalTeaser from './ExternalTeaser.svelte';

    export let isMain, order, limits, helpers, data;

    const firstListing = isMain ? order[0] : -1;

    const blogLimit = limits[order.indexOf(0)];
    const elsewhereLimit = limits[order.indexOf(1)];
    const feedLimit = limits[order.indexOf(2)];

    const blogs = data.markdown.blog.filter(({ frontmatter: { isMicroblog }}) => !isMicroblog).slice(0, blogLimit);
    const feeds = data.markdown.blog.filter(({ frontmatter: { isMicroblog }}) => isMicroblog).slice(0, feedLimit);
    const elsewhere = data.externalData.slice(0, elsewhereLimit);
</script>

{#each order as position}
{#if position === 0}
<div class="blog">
    {#if firstListing === position}
        <h1>Blog</h1>
    {:else}
        <h2>Blog</h2>
    {/if}
    <div class="entries">
        {#each blogs as blog}
        <BlogTeaser {blog} {helpers} />
        {/each}
    </div>
</div>
{:else if position === 1}
<div class="elsewhere">
    {#if firstListing === position}
        <h1>Elsewhere</h1>
    {:else}
        <h2>Elsewhere</h2>
    {/if}
    {#if isMain}
    <p>I write things that get published in other places too, they'll appear here for a while. Every post is linked to its original location, so it'll take you away from this site.</p>
    {/if}
    <div class="entries">
        {#each elsewhere as post}
        <ExternalTeaser {post} />
        <!-- <BlogTeaser {blog} {helpers} /> -->
        {/each}
    </div>
</div>
{:else if position === 2}
<div class="feed">
    {#if firstListing === position}
        <h1>Feed</h1>
    {:else}
        <h2>Feed</h2>
    {/if}
    <div class="entries">
        {#each feeds as blog}
        <BlogTeaser {blog} {helpers} />
        {/each}
    </div>
</div>
{/if}
{/each}