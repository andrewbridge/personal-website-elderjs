const fetch = require('node-fetch');

const AUDIOXIDE = 'https://api.audioxide.com';

const getData = (base, route) => fetch(`${base}/${route}`).then(r => r.json());

module.exports = async () => {
    const [reviews, articles] = await Promise.all([
        getData(AUDIOXIDE, 'reviews.json'),
        getData(AUDIOXIDE, 'articles.json')
    ]);

    const posts = reviews.concat(articles).sort((a, b) => {
        const dateA = new Date(a.metadata.created);
        const dateB = new Date(b.metadata.created);
        if (dateA === dateB) return 0;
        return (((dateA < dateB) * 2) - 1);
    });

    posts.forEach((post) => {
        const { metadata } = post;
        const base = 'https://audioxide.com';
        metadata.source = { name: 'Audioxide', base, url: `${base}/${metadata.type}/${metadata.slug}` };
        metadata.excerpt = metadata.blurb;
        const type = metadata.type;
        if (type === 'reviews') {
            metadata.title = 'Review: ' + metadata.title;
        }
        post.frontmatter = metadata;
    });

    return posts.filter(({ metadata: { author: { authors }}}) => authors.find(author => author.name === 'Andrew Bridge'));
};
