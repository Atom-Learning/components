const fs = require("fs");
const path = require("path");

const { kebabSlug } = require("./kebab-slug.cjs");
const { buildNavigationStructure } = require("./build-navigation-structure.cjs");
const { getLibraryVersion } = require("./get-library-version.cjs");
const { matchFilenameToNestedSlug } = require("./match-filename-to-nested-slug.cjs");

(async () => {
  /*
   * 1.
   * Make sure slug is kebabCase in fontMatter
   */

  await kebabSlug();

  /*
   * 2.
   * Generate the build constants json file
   */
  const fileName = path.join(process.cwd(), "lib", "build", "constants.json");
  let jsonData = {};
  try {
    // Use JSON.parse to convert string to JSON Object
    jsonData = JSON.parse(fs.readFileSync(path.join(fileName), "utf8"));
  } catch (err) { }

  try {
    jsonData["version"] = await getLibraryVersion();
  } catch (err) { }

  // Generate navigation structure for constants file AND
  /*
   * 3.
   * Update fontmatter with nestedSlug array
   */
  jsonData["navigation-structure"] = await buildNavigationStructure();

  // write the data back to the json file
  fs.writeFileSync(fileName, JSON.stringify(jsonData));

  /*
   * 4.
   * Make filename reflect generated nestedSlug
   */
  await matchFilenameToNestedSlug();
})();
