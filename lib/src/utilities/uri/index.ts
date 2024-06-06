export const isUriScheme = (url: string) =>
  /^tel?:/.test(url) ||
  /^mailto?:/.test(url) ||
  /^sms?:/.test(url) ||
  /^geo?:/.test(url)

const isAbsoluteUrl = (url: string) => /^https?:\/\//.test(url)

export const isExternalUrl = (url?: string) => {
  if (typeof window === 'undefined' || !url) return false

  return isAbsoluteUrl(url) && new URL(url).origin !== window.location.origin
}

export const getExternalAnchorProps = (url?: string) =>
  isExternalUrl(url) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
