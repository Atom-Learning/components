const fetch = require('node-fetch')

const requestGithubTags = async () => {
  const resp = await fetch(
    "https://api.github.com/repos/atom-learning/components/tags"
  );
  const json = await resp.json();
  return json.sort(
    (v1, v2) => parseInt(v2.name.slice(1)) > parseInt(v1.name.slice(1))
  );
};

const getLibraryVersion = async () => {
  const tags = await requestGithubTags();
  return tags?.[0]?.name;
};

module.exports = { getLibraryVersion }
