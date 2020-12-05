<script>
    import SiteLogo from './SiteLogo.svelte';
</script>

<style>
    header {
        border-bottom: 1px solid var(--foreground-colour, black);
        margin-bottom: 3em;
        padding: 0 1em;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    nav a {
        font-size: 28px;
    }

    :global(html.dark) header {
        border-bottom-color: var(--background-color, white);
    }
</style>

<header>
    <SiteLogo />
    <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
    </nav>
</header>