let latestLibVersion = undefined

const requestGithubTags = async () => {
  const resp = await fetch(
    'https://api.github.com/repos/atom-learning/components/tags'
  )
  const json = await resp.json()
  return json.sort(
    (v1, v2) => parseInt(v2.name.slice(1)) > parseInt(v1.name.slice(1))
  )
}

export const getLatestLibVersion = async (): Promise<string> => {
  if (latestLibVersion) {
    return latestLibVersion
  }

  const tags = await requestGithubTags()
  latestLibVersion = tags[0].name

  return latestLibVersion
}
