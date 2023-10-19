export const isExternalUrl = (url?: string) => {
  if (typeof window === 'undefined' || !url) return false

  const isAbsoluteUrl = /^https?:\/\//.test(url)
  return isAbsoluteUrl && new URL(url).origin !== window.location.origin
}

export const getExternalAnchorProps = (url?: string) =>
  isExternalUrl(url) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
