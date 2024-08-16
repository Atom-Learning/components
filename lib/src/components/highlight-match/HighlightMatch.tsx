import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../text'

const StyledHighlightMatchSection = styled('mark', {
  bg: 'transparent',
  color: '$primary800'
})

type HighlightMatchProps = {
  pattern: string | RegExp,
  children: React.ReactNode
} & React.ComponentProps<typeof Text>

export const HighlightMatch = React.memo(({ pattern, children, ...rest }: HighlightMatchProps): JSX.Element => {
  if (!pattern) return <Text {...rest}>{children}</Text>

  return (
    <Text {...rest}>
      {React.Children.map(children, (child) => {
        if (!(typeof child === 'string' || typeof child === 'number')) return null

        const regex = pattern instanceof RegExp ? pattern : new RegExp(`(${pattern})`, 'gi')
        const textArray = String(child).split(regex);

        return textArray.map(str => {
          if (regex.test(str)) {
            return <StyledHighlightMatchSection key={str}>{str}</StyledHighlightMatchSection>
          }
          return str;
        })
      })}
    </Text>
  )
})


HighlightMatch.displayName = 'HighlightMatch'
