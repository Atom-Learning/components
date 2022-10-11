import fs from "fs";
import path from "path";

import { kebabSlug } from "./kebab-slug.js";
import { buildNavigationStructure } from "./build-navigation-structure.js";
import { getLibraryVersion } from "./get-library-version.js";
import { matchFilenameToNestedSlug } from "./match-filename-to-nested-slug.js";

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
} catch (err) {}

try {
  jsonData["version"] = await getLibraryVersion();
} catch (err) {}

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
