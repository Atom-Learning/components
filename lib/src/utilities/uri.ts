export const isExternalLink = (link: string = '') => {
  const isAbsolute = /^https?:\/\//.test(link)
  return isAbsolute && new URL(link).origin !== window.location.origin
}
