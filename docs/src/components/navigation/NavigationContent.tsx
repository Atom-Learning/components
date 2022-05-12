import { Flex, Icon, Link, Text } from '@components'
import { ArrowRight } from '@atom-learning/icons'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

import { NavigationItem, PageData } from './Navigation'

type NavigationContentProps = {
  content: NavigationItem
  onNavigate: () => void
}

type NavigationListProps = {
  items: PageData[]
  onNavigate: () => void
  currentPage: string
  css?: any
}

const CategoryHeading = (props) => (
  <Text
    {...props}
    as="h3"
    size="sm"
    css={{
      color: 'white',
      fontWeight: 600,
      mb: '$3',
      mt: '$sizes$2'
    }}
  />
)

const NavigationList: React.FC<NavigationListProps> = ({
  css,
  items,
  onNavigate,
  currentPage
}) => {
  return (
    <Text
      as="ul"
      css={{ listStyleType: 'none', m: 0, mb: '$4', p: 0, ...(css as any) }}
    >
      {items.map(({ id, source, title }) => {
        if (!title) return null
        const isCurrentPage = `/${source}/${id}` === currentPage
        return (
          <Flex
            as="li"
            css={{ justifyContent: 'space-between', alignItems: 'center' }}
            key={`${source}${id}`}
          >
            <NextLink passHref href={`/${source}/${id}`}>
              <Link
                size="sm"
                css={{
                  color: 'white',
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  py: '$2',
                  '&:hover,&:focus': { color: 'white' },
                  ...(isCurrentPage ? { textDecoration: 'underline' } : {})
                }}
                onClick={onNavigate}
              >
                {title}
              </Link>
            </NextLink>
            {isCurrentPage && (
              <Icon css={{ color: 'white' }} size="sm" is={ArrowRight} />
            )}
          </Flex>
        )
      })}
    </Text>
  )
}

export const NavigationContent: React.FC<NavigationContentProps> = ({
  content,
  onNavigate
}) => {
  const router = useRouter()
  if (Array.isArray(content)) {
    return (
      <NavigationList
        items={content}
        onNavigate={onNavigate}
        currentPage={router.asPath}
      />
    )
  }

  return (
    <>
      {Object.entries(content).map(([category, pages]) => (
        <React.Fragment key={category}>
          {category && category !== 'void' && (
            <CategoryHeading>{category}</CategoryHeading>
          )}
          {pages && (
            <NavigationList
              css={{ ml: '$3' }}
              items={pages}
              onNavigate={onNavigate}
              currentPage={router.asPath}
            />
          )}
        </React.Fragment>
      ))}
    </>
  )
}
