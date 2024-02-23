import * as React from 'react'

import { styled } from '~/stitches'

const StyledHighlightMatchSection = styled('mark', {
  bg: 'transparent',
  color: '$primary800'
})

type HighlightMatchProps = {
  pattern: string | RegExp,
  children: React.ReactNode
}

export const HighlightMatch = React.memo(({ pattern, children }: HighlightMatchProps): JSX.Element => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (!(typeof child === 'string' || typeof child === 'number')) return child

        const regex = pattern instanceof RegExp ? pattern : new RegExp(`(${pattern})`, 'gi')
        const textArray = String(child).split(regex);

        return textArray.map(str => {
          if (regex.test(str)) {
            return <StyledHighlightMatchSection key={str}>{str}</StyledHighlightMatchSection>
          }
          return str;
        })
      })}
    </>
  )
})


HighlightMatch.displayName = 'HighlightMatch'
