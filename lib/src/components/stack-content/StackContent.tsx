import * as React from 'react'

import type { CSS } from '~/stitches'
import { styled } from '~/stitches'

import { StyledDivider } from '../divider/Divider'
import { StyledHeading } from '../heading/Heading'
import { StyledImage } from '../image/Image'
import { StyledList } from '../list/List'
import { StyledText } from '../text/Text'

const StyledStackContent = styled('div', {
  '& > *': {
    '&:not(:first-child)': { mt: '$5' },
    '&:not(:last-child)': { mb: '$5' }
  },
  [`& > ${StyledHeading}`]: {
    maxWidth: '65ch'
  },
  [`& > ${StyledText}`]: {
    maxWidth: '75ch'
  },
  [`& > ${StyledList}`]: {
    maxWidth: '75ch'
  },
  [`& > ${StyledDivider}`]: {
    my: '$5'
  },
  [`& > ${StyledImage}`]: {
    display: 'block',
    '&:not(:first-child)': { mt: '$6' },
    '&:not(:last-child)': { mb: '$6' }
  }
})

type StackContentProps = React.ComponentProps<typeof StyledStackContent> & {
  children: React.ReactNode
  css?: CSS
}

export const StackContent: React.ForwardRefExoticComponent<StackContentProps> =
  React.forwardRef((props, ref) => <StyledStackContent ref={ref} {...props} />)

StackContent.displayName = 'StackContent'
