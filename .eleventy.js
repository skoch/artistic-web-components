module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './dist/stylesheets/**/*.css',
  });
  eleventyConfig.addPassthroughCopy({
    icons: '/',
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
