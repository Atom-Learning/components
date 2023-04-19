import * as React from 'react'
import { Close } from '@atom-learning/icons'

import { ColorScheme } from '~/experiments/color-scheme'
import { styled } from '~/stitches'
import { findChildByType } from '~/utilities'
import { ActionIcon } from '../action-icon'
import { Dismissible } from '../dismissible'

import { Flex } from '../flex'
import { Icon } from '../icon'
import { IBannerContextValue } from './Banner.types'
import { BannerActions } from './BannerActions'
import { BannerButton } from './BannerButton'
import { BannerContent } from './BannerContent'
import { BannerContext } from './BannerContext'
import { BannerHeading } from './BannerHeading'
import { BannerImage } from './BannerImage'
import { BannerText } from './BannerText'
import { Box } from '../box'

type TBannerRegularProps = React.ComponentProps<typeof Container> &
  IBannerContextValue & {
    dismissible?: boolean
  }

const Container = styled(Flex, {
  borderRadius: '$0',
  overflow: 'hidden',
  '& > :first-child': {
    flex: 2
  },
  '& > :last-child': {
    flex: 'auto'
  },
  variants: {
    size: {
      sm: {
        maxWidth: '736px'
      },
      md: {
        minWidth: '737px'
      }
    }
  }
})

const Dismiss = styled(ActionIcon, {
  position: 'absolute',
  top: '12px',
  right: '12px',
  variants: {
    containerSize: {
      sm: {
        '&:not(:disabled)': {
          bg: 'transparent',
          color: '$grey800'
        }
      },
      md: {
        '&:not(:disabled)': {
          bg: 'white',
          color: '$grey800'
        }
      }
    },
    emphasis: {
      hiContrast: {
        '&:not(:disabled)': {
          color: 'white'
        }
      }
    }
  }
})

export const BannerRegular: React.FC<TBannerRegularProps> & {
  Content: typeof BannerContent
  Heading: typeof BannerHeading
  Text: typeof BannerText
  Actions: typeof BannerActions
  Image: typeof BannerImage
  Button: typeof BannerButton
} = ({
  css,
  children,
  size = 'md',
  colorScheme,
  emphasis,
  dismissible,
  ...props
}) => {
  const content = findChildByType(children, BannerContent)
  const image = findChildByType(children, BannerImage)
  return (
    <Box css={{ position: 'relative' }}>
      <Dismissible value="dismiss-banner-regular">
        {dismissible && (
          <Dismissible.Trigger asChild>
            <Dismiss
              size={size === 'sm' ? 'md' : 'sm'}
              label="dismiss"
              hasTooltip={false}
              isRounded
              containerSize={size}
              emphasis={emphasis}
              theme="neutral"
              appearance="solid"
            >
              <Icon is={Close} />
            </Dismiss>
          </Dismissible.Trigger>
        )}
        <BannerContext.Provider
          value={{ colorScheme, size, emphasis, type: 'regular' }}
        >
          <ColorScheme {...colorScheme}>
            <Container size={size} css={{ ...css }} {...props}>
              {content}
              {image}
            </Container>
          </ColorScheme>
        </BannerContext.Provider>
      </Dismissible>
    </Box>
  )
}

BannerRegular.Content = BannerContent
BannerRegular.Heading = BannerHeading
BannerRegular.Text = BannerText
BannerRegular.Actions = BannerActions
BannerRegular.Image = BannerImage
BannerRegular.Button = BannerButton

BannerRegular.displayName = 'BannerRegular'
