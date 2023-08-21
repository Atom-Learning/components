export const isExternalLink = (link: string) => {
  const isAbsolute = /^https?:\/\//.test(link)
  return isAbsolute && new URL(link).origin !== window.location.origin
}

export const isMailLink = (link: string) => link.startsWith('mailto:')

export const isTelLink = (link: string) => link.startsWith('tel:')
