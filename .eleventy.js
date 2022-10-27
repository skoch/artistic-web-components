const prettier = require('prettier');

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './dist/stylesheets/**/*.css',
  });
  eleventyConfig.addPassthroughCopy('src/favicon-32x32.png');

  eleventyConfig.addTransform('prettier', function (content, outputPath) {
    if (outputPath.indexOf('.html') > -1) {
      return prettier.format(content, { parser: 'html' });
    }
    return content;
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
