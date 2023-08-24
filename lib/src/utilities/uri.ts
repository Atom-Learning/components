export const isExternalLink = (link: string): boolean => {
  const isAbsolute = /^https?:\/\//.test(link)
  return isAbsolute && new URL(link).origin !== window.location.origin
}

export const isMailLink = (link: string): boolean => link.startsWith('mailto:')

export const isTelLink = (link: string): boolean => link.startsWith('tel:')
