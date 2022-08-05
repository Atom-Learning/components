import * as React from 'react'

import type { CSS } from '~/stitches'
import { styled } from '~/stitches'

import { StyledDivider } from '../divider/Divider'
import { StyledHeading } from '../heading/Heading'
import { StyledImage } from '../image/Image'
import { StyledList } from '../list/List'
import { StyledText } from '../text/Text'

const StyledStackContent = styled('div', {
  [`& > ${StyledHeading}`]: {
    maxWidth: '65ch',
    '&:not(:first-child)': { mt: '$6' },
    '&:not(:last-child)': { mb: '$6' }
  },
  [`& > ${StyledText}`]: {
    maxWidth: '75ch',
    '&:not(:last-child)': { mb: '$6' }
  },
  [`& > ${StyledList}`]: {
    maxWidth: '75ch',
    '&:not(:last-child)': { mb: '$6' }
  },
  [`& > ${StyledDivider}`]: {
    my: '$6'
  },
  [`& > ${StyledImage}`]: {
    display: 'block',
    '&:not(:first-child)': { mt: '$7' },
    '&:not(:last-child)': { mb: '$7' }
  }
})

type StackContentProps = React.ComponentProps<typeof StyledStackContent> & {
  children: React.ReactNode
  css?: CSS
}

export const StackContent: React.ForwardRefExoticComponent<StackContentProps> =
  React.forwardRef((props, ref) => <StyledStackContent ref={ref} {...props} />)

StackContent.displayName = 'StackContent'
