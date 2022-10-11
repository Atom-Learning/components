import fs from "fs";
import path from "path";
import {
  pagesDirectory,
  getPageFilenames,
  getPageByFilename,
} from "../../api.js";

export const matchFilenameToNestedSlug = async () => {
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
