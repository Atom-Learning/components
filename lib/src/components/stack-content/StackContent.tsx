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
    '&:not(:first-child)': { mt: '$5' },
    '&:not(:last-child)': { mb: '$5' }
  },
  [`& > ${StyledText}`]: {
    maxWidth: '75ch',
    '&:not(:last-child)': { mb: '$5' }
  },
  [`& > ${StyledList}`]: {
    maxWidth: '75ch',
    '&:not(:last-child)': { mb: '$5' }
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

export const StackContent: React.FC<StackContentProps> = React.forwardRef((props, ref) => (
  <StyledStackContent ref={ref} {...props} />
))

StackContent.displayName = 'StackContent'
