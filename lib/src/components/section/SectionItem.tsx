import * as React from 'react'
import { ArrowRight } from '@atom-learning/icons'

import { CSS, keyframes, styled } from '../../stitches'
import { Badge } from '../badge'
import { Flex } from '../flex'
import { Heading } from '../heading'
import { Icon } from '../icon'
import { Link } from '../link'
import { Text } from '../text'
import { findChildByType } from '../../utilities'

interface ISectionItemProps extends React.ComponentProps<typeof Flex> {
  status?: {
    text: string
    theme: React.ComponentProps<typeof Badge>['theme']
    icon: React.FC<React.SVGProps<SVGSVGElement>>
  }
  iconBackground?: CSS['color']
  to?: string
  onClick?: () => void
}

const slideLeftAnimation = keyframes({
  from: {
    transform: 'translateX(0)'
  },
  to: {
    transform: 'translateX(-5px)'
  }
})

const slideRightAnimation = keyframes({
  from: {
    transform: 'translateX(-5px)'
  },
  to: {
    transform: 'translateX(0)'
  }
})

const containerCss: CSS = {
  display: 'flex',
  gap: '$4',
  bg: 'white',
  borderRadius: '$2',
  p: '$4',
  alignItems: 'center',
  textAlign: 'left',
  '&::before, &::after': {
    display: 'none !important'
  },
  '&:hover, &:active, &:focus': {
    textDecoration: 'none',
    '> svg': {
      animation: `${slideLeftAnimation} 250ms ease`,
      animationFillMode: 'forwards'
    }
  },
  '> svg': {
    animation: `${slideRightAnimation} 250ms ease`,
    animationFillMode: 'forwards'
  }
}

const StyledFlexContainer = styled(Flex, containerCss)

const StyledLinkContainer = styled(Link, containerCss)

export const SectionItem: React.FC<ISectionItemProps> & {
  Icon: typeof Icon
  Heading: typeof Heading
  SubHeading: typeof Text
} = ({ children, css, iconBackground, status, onClick, to }) => {
  const icon = findChildByType(children, Icon)
  const heading = findChildByType(children, Heading)
  const subHeading = findChildByType(children, Text)
  const isClickable = Boolean(onClick || to)

  const getChildren = () => {
    return (
      <>
        {icon && (
          <Flex
            css={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: iconBackground,
              size: '$5',
              borderRadius: '$round',
              '@sm': { display: 'flex' }
            }}
          >
            {icon}
          </Flex>
        )}
        {heading && (
          <Flex
            css={{
              gap: '$3',
              flexDirection: 'column',
              alignItems: 'flex-start',
              '@sm': { gap: '$1' }
            }}
          >
            <Flex css={{ gap: '$2' }}>
              {heading}
              {status && (
                <Badge
                  theme={status.theme}
                  size="xs"
                  css={{ px: '$1', borderRadius: '$1' }}
                >
                  <Flex css={{ gap: '$1', alignItems: 'center' }}>
                    <Icon is={status.icon} size="sm" />
                    {status.text}
                  </Flex>
                </Badge>
              )}
            </Flex>
            {subHeading}
          </Flex>
        )}
        {(to || onClick) && (
          <Icon
            is={ArrowRight}
            size="lg"
            css={{
              ml: 'auto',
              color: '$primary',
              display: 'none',
              '@sm': { display: 'block' }
            }}
          />
        )}
      </>
    )
  }

  return isClickable ? (
    <StyledLinkContainer css={css} href={to} onClick={onClick}>
      {getChildren()}
    </StyledLinkContainer>
  ) : (
    <StyledFlexContainer css={css}>{getChildren()}</StyledFlexContainer>
  )
}

SectionItem.Icon = Icon
SectionItem.Heading = Heading
SectionItem.SubHeading = Text
