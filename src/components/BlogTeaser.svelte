<script>
  export let blog;
  export let helpers;
</script>

<style>
  .entry {
    position: relative;
  }

  @media (pointer: fine) {
    .overlay-link:before {
      content: none;
    }
  }
</style>

<div class="entry">
  <a class="overlay-link" href={helpers.permalinks.blog({ slug: blog.slug })}>{blog.frontmatter.title}</a>
  <p>{blog.frontmatter.excerpt}</p>
</div>
