import * as React from 'react'
import { Flex } from '@atom-learning/components'
import { Link } from '~/components/app'

const DS_LIB_GITHUB_URL = 'https://github.com/Atom-Learning/components'

export const Links = ({ viewSource, showReportAnIssue, custom, ...rest }) => {
  const links = []
  if (viewSource)
    links.push({
      name: 'View source',
      href: `${DS_LIB_GITHUB_URL}/tree/main/lib/src/${viewSource}`,
      isExternal: true
    })
  if (showReportAnIssue)
    links.push({
      name: 'Report an issue',
      href: `${DS_LIB_GITHUB_URL}/issues/new`,
      isExternal: true
    })
  if (custom) links.push(...custom)
  if (!links.length) return null
  return (
    <Flex gap="3" {...rest}>
      {links.map(({ name, ...rest }) => (
        <Link key={name} {...rest}>
          {name}
        </Link>
      ))}
    </Flex>
  )
}
