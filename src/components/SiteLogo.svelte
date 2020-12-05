<style>
    a.logo {
        position: relative;
        font-family: var(--heading-fontstack);
        font-size: 24px;
        line-height: 28px;
        text-decoration: none;
        color: var(--foreground-colour);
        padding-left: 60px;
        & span {
            display: block;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            &:last-child {
                font-size: 28px;
            }
        }
        &::after {
            content: '';
            background-image: url('/avatar.gif');
            background-size: cover;
            width: 55px;
            height: 55px;
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }

    :global(html.dark) a.logo {
        color: var(--background-color);
    }
</style>

<a href="/" class="logo"><span>Andrew</span> <span>Bridge</span></a>