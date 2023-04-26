import { Icon, Link as DSLink } from '@atom-learning/components'
import { ArrowRightTop } from '@atom-learning/icons'
import * as React from 'react'

type TExternalLinkProps = React.ComponentProps<
  typeof DSLink & { children?: React.ReactNode }
>
const ExternalLink = React.forwardRef<HTMLAnchorElement, TExternalLinkProps>(
  ({ children, ...rest }, ref) => (
    <DSLink ref={ref} target="_blank" {...rest}>
      {children} <Icon css={{ size: '0.875em' }} is={ArrowRightTop} />
    </DSLink>
  )
)
ExternalLink.displayName = 'ExternalLink'

type TLinkProps = TExternalLinkProps & { isExternal?: boolean }
export const Link = React.forwardRef<HTMLAnchorElement, TLinkProps>(
  ({ isExternal = false, ...rest }, ref) =>
    isExternal ? (
      <ExternalLink ref={ref} {...rest} />
    ) : (
      <DSLink ref={ref} {...rest} />
    )
)
Link.displayName = 'Link'
