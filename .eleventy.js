// const htmlmin = require('html-minifier');
const prettier = require('prettier');

module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './dist/stylesheets/**/*.css',
  });
  eleventyConfig.addPassthroughCopy({
    icons: '/icons',
  });

  eleventyConfig.addTransform('prettier', function (content, outputPath) {
    if (outputPath.indexOf('.html') > -1) {
      return prettier.format(content, { parser: 'html' });
    }
    return content;
  });
  // eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
  //   // Eleventy 1.0+: use this.inputPath and this.outputPath instead
  //   if (outputPath && outputPath.endsWith('.html')) {
  //     let minified = htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true,
  //     });
  //     return minified;
  //   }

  //   return content;
  // });

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
