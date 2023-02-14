const { readFile, writeFile } = require('fs/promises')
const { stringify } = require('yaml')
const matter = require('gray-matter')


// Props: https://stackoverflow.com/a/70046609
const updateFrontMatter = async (filePath, updateFieldsFunction) => {
  const { data: currFrontMatter, content } = matter(await readFile(filePath));
  const newFrontMatter = updateFieldsFunction(currFrontMatter);
  const newContent = `---\n${stringify(newFrontMatter)}---\n${content}`;
  await writeFile(filePath, newContent);
};

module.exports = { updateFrontMatter }
