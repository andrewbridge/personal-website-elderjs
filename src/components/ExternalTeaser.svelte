<script>
  export let post;
</script>

<style>
  .source {
    font-style: italic;
    font-size: 0.8em;
  }
</style>

<div class="entry">
  <a href={post.frontmatter.source.url}>{post.frontmatter.title}</a>
  <p class="source">{post.frontmatter.source.name}</p>
  <p>{post.frontmatter.excerpt}</p>
</div>
