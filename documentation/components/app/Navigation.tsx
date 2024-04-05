import { NavigationMenuVertical } from '@atom-learning/components'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import buildConstants from '~/lib/build/constants.json'
import * as React from 'react'
import { removeStartingNumber } from '~/utilities/removeStartingNumber'

const navigationStructure = buildConstants['navigation-structure']

type NavigationProps = {
  onNavigate?: (pathname) => void
}

const NavigationLink: React.FC<{ href: string }> = ({ href, children }) => {
  const { asPath: currentPage } = useRouter()
  const isCurrentPage = href === currentPage.split('?')[0]

  if (!children) return null

  return (
    <NextLink href={href} passHref replace={true}>
      <NavigationMenuVertical.Link size="md" active={isCurrentPage}>
        {children}
      </NavigationMenuVertical.Link>
    </NextLink>
  )
}

export const Navigation: React.FC<NavigationProps> = React.memo(
  ({ onNavigate }) => {
    const { pathname } = useRouter()
    React.useEffect(() => {
      onNavigate?.(pathname)
    }, [pathname, onNavigate])

    const renderRecursive = React.useMemo(() => {
      const render = (navigationStructureLevel, level) => {
        if (!navigationStructureLevel?.length) return null

        return navigationStructureLevel.map(({ title, href, children }) => {
          if (!title) return

          if (!children) {
            return (
              <NavigationLink href={href} key={title}>
                {removeStartingNumber(title)}
              </NavigationLink>
            )
          } else {
            return (
              <NavigationMenuVertical.Accordion
                defaultOpen={level < 3}
                key={title}
              >
                <NavigationMenuVertical.AccordionTrigger>
                  {removeStartingNumber(title)}
                </NavigationMenuVertical.AccordionTrigger>
                <NavigationMenuVertical.AccordionContent>
                  {render(children, level + 1)}
                </NavigationMenuVertical.AccordionContent>
              </NavigationMenuVertical.Accordion>
            )
          }
        })
      }
      return render(navigationStructure, 1)
    }, [])

    return <NavigationMenuVertical>{renderRecursive}</NavigationMenuVertical>
  }
)
Navigation.displayName = 'Navigation'
