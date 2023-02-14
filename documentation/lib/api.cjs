const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const pagesDirectory = path.join(process.cwd(), "content");

const getPageFilenames = () => {
  return fs
    .readdirSync(pagesDirectory)
    .filter((file) => path.extname(file) === ".md");
};

const getPageByFilename = (filename, fields = []) => {
  const filenameNoExtension = filename.replace(/\.md$/, "");
  const fullPath = path.join(pagesDirectory, `${filenameNoExtension}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "filename") {
      items[field] = filenameNoExtension;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
};

const getAllPages = (fields = []) => {
  const filenames = getPageFilenames();
  const pages = filenames.map((filename) =>
    getPageByFilename(filename, fields)
  );
  return pages;
};

module.exports = {
  pagesDirectory,
  getPageFilenames,
  getPageByFilename,
  getAllPages
}
