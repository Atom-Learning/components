const fs = require("fs")
const path = require("path")
const {
  pagesDirectory,
  getPageFilenames,
  getPageByFilename,
} = require("../../api.cjs")

const matchFilenameToNestedSlug = async () => {
  // Pass #1: Rename files
  let pageFilenames = getPageFilenames();
  await Promise.all(
    pageFilenames.map(async (currPageFilename) => {
      const { nestedSlug } = getPageByFilename(currPageFilename, [
        "nestedSlug",
      ]);
      const newpageFilename = `${nestedSlug.join(".")}.md`;
      if (newpageFilename !== currPageFilename) {
        const currPath = path.join(pagesDirectory, currPageFilename);
        const newPath = path.join(pagesDirectory, newpageFilename);

        await new Promise((resolve) =>
          fs.rename(currPath, newPath, () => {
            resolve(true);
          })
        );
      }
    })
  );
};

module.exports = { matchFilenameToNestedSlug }
