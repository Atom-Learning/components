import { Icon, Text, Box, Heading } from '@atom-learning/components'
import { ArrowRight } from '@atom-learning/icons'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import buildConstants from '~/lib/build/constants.json'
import * as React from 'react'
import { Link } from '.'

const navigationStructure = buildConstants['navigation-structure']

type NavigationProps = {
  onNavigate?: (pathname) => void
}

const NavigationTitle = ({ level, css, ...rest }) => {
  switch (level) {
    case 1:
      return <Heading as="h2" size="sm" css={css} {...rest} />
    case 2:
      return <Text as="h3" size="sm" css={{ fontWeight: 'bold', ...css }} {...rest} />
    default:
      return <Text size="sm" css={css} {...rest} />
  }
}

const NavigationLink: React.FC<{ href: string, css: any }> = ({
  href,
  children,
  css
}) => {
  const { asPath: currentPage } = useRouter()

  if (!children) return
  const isCurrentPage = href === currentPage

  return (
    <NextLink href={href} passHref replace={true} shallow={true}>
      <Link css={{ display: 'flex', justifyContent: 'space-between', ...css }}>
        {children}
        {isCurrentPage && <Icon size="sm" is={ArrowRight} />}
      </Link>
    </NextLink>
  )
}

export const Navigation: React.FC<NavigationProps> = React.memo(({
  onNavigate
}) => {

  const { pathname } = useRouter()
  React.useEffect(() => {
    onNavigate?.(pathname)
  }, [pathname, onNavigate])


  const renderRecursive = React.useMemo(() => {
    const render = (navigationStructureLevel, level) => {
      if (!navigationStructureLevel?.length) return null;
      return (
        <Box as="ul" css={{ listStyleType: 'none', m: 0, mb: '$4', p: 0, pl: [1, 2].includes(level) ? 0 : '$4' }}>
          {navigationStructureLevel.map(({ title, href, children }) => {
            if (!title) return;
            return (
              <Box as="li" css={{ mb: [1].includes(level) ? '$6' : 0 }} key={href}>
                <NavigationLink href={href} css={{ mb: '$4', color: 'currentColor !important' }}>
                  <NavigationTitle level={level} css={{ color: 'currentColor' }} >
                    {title}
                  </NavigationTitle>
                </NavigationLink>
                {render(children, level + 1)}
              </Box>
            )
          })}

        </Box>
      )
    }
    return render(navigationStructure, 1);
  }, [])

  return (
    <nav>
      {renderRecursive}
    </nav>
  )
})
Navigation.displayName = 'Navigation'
