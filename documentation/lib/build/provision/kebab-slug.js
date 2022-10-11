import path from "path";
import kebabCase from "lodash.kebabcase";
import { updateFrontMatter } from "./utility/updateFrontMatter.js";
import {
  pagesDirectory,
  getPageFilenames,
  getPageByFilename,
} from "../../api.js";

export const kebabSlug = async () => {
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
