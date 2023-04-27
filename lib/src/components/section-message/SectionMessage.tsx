import { TooltipProvider } from '@radix-ui/react-tooltip'
import React from 'react'

import { styled } from '~/stitches'

import { Dismissible } from '../dismissible'
import { Stack } from '../stack'
import {
  SectionMessageProvider,
  useSectionMessageContext
} from './SectionMessageContext'
import { SectionMessageDescription } from './SectionMessageDescription'
import { SectionMessageDismiss } from './SectionMessageDismiss'
import { SectionMessageIcon } from './SectionMessageIcon'
import {
  SectionMessageActions,
  SectionMessageContent
} from './SectionMessageLayout'
import { SectionMessageTitle } from './SectionMessageTitle'

const StyledSectionMessage = styled(Dismissible, {
  position: 'relative',
  borderRadius: '$0',
  display: 'flex',
  p: '$4',
  border: '1px solid white',
  variants: {
    theme: {
      success: {
        bg: '$successLight',
        color: '$successDark'
      },
      warning: {
        bg: '$warningLight',
        color: '$warningText'
      },
      error: {
        bg: '$dangerLight',
        color: '$dangerDark'
      },
      neutral: {
        bg: '$grey100',
        color: '$grey1000'
      },
      info: {
        bg: '$blue100',
        color: '$blue1000'
      }
    },
    hasIcon: {
      true: {
        pl: '$6'
      }
    },
    hasDismiss: {
      true: {
        pr: '$7'
      }
    }
  }
})

const StyledStack = styled(Stack, {
  flexGrow: 1,
  justifyContent: 'space-between !important'
})

const SectionMessageRoot = ({
  children,
  ...rest
}: React.ComponentProps<typeof StyledSectionMessage>): JSX.Element => {
  const { theme, hasIcon, hasDismiss } = useSectionMessageContext()

  return (
    <StyledSectionMessage
      {...rest}
      theme={theme}
      hasIcon={hasIcon}
      hasDismiss={hasDismiss}
    >
      <StyledStack gap={3}>{children}</StyledStack>
    </StyledSectionMessage>
  )
}

export type SectionMessageTheme =
  | 'success'
  | 'warning'
  | 'error'
  | 'neutral'
  | 'info'

export interface SectionMessageProps
  extends React.ComponentProps<typeof SectionMessageRoot> {
  theme?: SectionMessageTheme
}

export const SectionMessage = ({
  theme = 'info',
  ...rest
}: SectionMessageProps): JSX.Element => {
  return (
    <TooltipProvider>
      <SectionMessageProvider theme={theme}>
        <SectionMessageRoot {...rest} />
      </SectionMessageProvider>
    </TooltipProvider>
  )
}

SectionMessage.Title = SectionMessageTitle
SectionMessage.Description = SectionMessageDescription
SectionMessage.Icon = SectionMessageIcon
SectionMessage.Dismiss = SectionMessageDismiss
SectionMessage.Content = SectionMessageContent
SectionMessage.Actions = SectionMessageActions
