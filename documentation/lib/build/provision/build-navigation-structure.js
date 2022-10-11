import { pagesDirectory, getAllPages } from "../../api.js";
import { updateFrontMatter } from "./utility/updateFrontMatter.js";
import path from "path";

//https://stackoverflow.com/a/71709765
function findByUuid(array, uuid) {
  for (const item of array) {
    if (item.uuid === uuid) return item;
    if (item.children?.length) {
      const innerResult = findByUuid(item.children, uuid);
      if (innerResult) return innerResult;
    }
  }
}

function recursiveSort(array, compareFunction) {
  if (!compareFunction) return;

  const fn = (arr) => {
    if (!arr?.length) return;
    arr.sort(compareFunction);
    for (const item of arr) {
      item.children = fn(item.children);
    }
    return arr;
  };

  return fn(array);
}

export const buildNavigationStructure = async () => {
  const allPages = getAllPages(["filename", "slug", "title", "parent", "uuid"]);
  let toProcessPages = [...allPages];
  const processedPages = [];

  let wasLastLoopProductive = true; // Start with true so first 'while' runs
  while (toProcessPages.length && wasLastLoopProductive) {
    const toProcessPagesLength = toProcessPages.length;

    wasLastLoopProductive = false;
    for (let i = toProcessPagesLength - 1; i >= 0; i--) {
      const { filename, title, slug, parent, uuid } = toProcessPages[i];
      const hasParent = parent && parent !== uuid;
      const pageData = {
        slug,
        title,
        href: "/" + slug,
        children: [],
        uuid,
      };
      if (hasParent) {
        const parentPage = findByUuid(processedPages, parent);
        if (!parentPage) continue; // parent not processed yet! Try again next loop
        pageData.href = `${parentPage.href}/${slug}`;
        parentPage.children.push(pageData);
      } else {
        processedPages.push(pageData);
      }

      const currPagePath = path.join(pagesDirectory, `${filename}.md`);
      await updateFrontMatter(currPagePath, (frontMatter) => {
        frontMatter.nestedSlug = pageData.href.split("/").filter(Boolean);
        return frontMatter;
      });
      wasLastLoopProductive = true;
      toProcessPages.splice(i, 1);
    }
  }

  return recursiveSort(processedPages, (a, b) => {
    if (a.title === "Overview") return -1; // "Overview" is treated as a magic word so it always floats to the top
    return a.title > b.title ? 1 : -1; // Comparing strings!
  });
};
