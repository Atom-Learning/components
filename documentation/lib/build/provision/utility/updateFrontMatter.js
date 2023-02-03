import { readFile, writeFile } from "fs/promises";
import { stringify } from "yaml";
import matter from "gray-matter";

// Props: https://stackoverflow.com/a/70046609
export const updateFrontMatter = async (filePath, updateFieldsFunction) => {
  const { data: currFrontMatter, content } = matter(await readFile(filePath));
  const newFrontMatter = updateFieldsFunction(currFrontMatter);
  const newContent = `---\n${stringify(newFrontMatter)}---\n${content}`;
  await writeFile(filePath, newContent);
};
