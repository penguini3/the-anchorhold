module.exports = function (eleventyConfig) {
  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
  eleventyConfig.addPassthroughCopy("src/styles");
  return {
    dir: {
      input: "src",
      output: "anchorhold.fyi",
      includes: "templates",
    },
  };
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});
};
