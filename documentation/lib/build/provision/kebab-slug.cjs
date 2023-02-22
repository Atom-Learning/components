const path = require("path");
const kebabCase = require("lodash.kebabcase");
const { updateFrontMatter } = require("./utility/updateFrontMatter.cjs");
const {
  pagesDirectory,
  getPageFilenames,
  getPageByFilename,
} = require("../../api.cjs");

const kebabSlug = async () => {
  let pageFilenames = getPageFilenames();
  await Promise.all(
    pageFilenames.map(async (currPageFilename) => {
      const { slug } = getPageByFilename(currPageFilename, ["slug"]);
      const newSlug = kebabCase(slug);
      const pagePath = path.join(pagesDirectory, currPageFilename);
      await updateFrontMatter(pagePath, (frontMatter) => {
        frontMatter.slug = newSlug;
        return frontMatter;
      });
    })
  );
};

module.exports = { kebabSlug }
