import React from 'react'

import { styled } from '~/stitches'

import { Box } from '../box'

const HamburgerLayer = styled(Box, {
  width: '100%',
  height: '2px',
  bg: '$tonal400',
  borderRadius: '$1',
  left: 0,
  marginLeft: 'auto',
  position: 'absolute',
  transform: 'rotate(0deg)',
  transition: '.325s ease-in-out'
})

const HamburgerWrapper = styled('div', {
  height: '14px',
  width: '16px',
  transform: 'rotate(0deg)',
  variants: {
    state: {
      closed: {
        [`& ${HamburgerLayer}:nth-child(1)`]: {
          top: '0px'
        },
        [`& ${HamburgerLayer}:nth-child(2),  ${HamburgerLayer}:nth-child(3)`]: {
          top: '6px'
        },
        [`& ${HamburgerLayer}:nth-child(4)`]: {
          top: '12px'
        }
      },
      open: {
        [`& ${HamburgerLayer}:nth-child(1), & ${HamburgerLayer}:nth-child(4)`]:
          {
            top: '6px',
            width: '0%',
            left: '50%'
          },
        [`& ${HamburgerLayer}:nth-child(2)`]: {
          top: '6px',
          transform: 'rotate(45deg)'
        },
        [`& ${HamburgerLayer}:nth-child(3)`]: {
          top: '6px',
          transform: 'rotate(-45deg)'
        }
      }
    }
  }
})

type HamburgerProps = {
  isOpen: boolean
}

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen }) => {
  return (
    <HamburgerWrapper state={isOpen ? 'open' : 'closed'}>
      <HamburgerLayer />
      <HamburgerLayer />
      <HamburgerLayer />
      <HamburgerLayer />
    </HamburgerWrapper>
  )
}
