export const isExternalLink = (link = '') => {
  if (typeof window === 'undefined') return false

  const isAbsolute = /^https?:\/\//.test(link)
  return isAbsolute && new URL(link).origin !== window.location.origin
}

export const getExternalAnchorProps = (url: string) =>
  isExternalLink(url) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
