const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [
          require('autoprefixer'),
          require('postcss-nesting'),
          require('postcss-custom-properties')
        ],
      },
    }),
  ],
};
