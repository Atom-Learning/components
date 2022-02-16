import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { useProgressIndicator } from './progress-indicator-context/ProgressIndicatorContext'

const StyledBullet = styled(Flex, {
  position: 'relative',
  p: '$2',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$2',
  height: '$2',
  borderRadius: '50%',
  border: 'none',
  bg: '$tonal50',
  ml: '$3',
  variants: {
    state: {
      normal: { bg: '$tonal50', color: '$tonal400' },
      active: { bg: '$primary', color: 'white' },
      viewed: { bg: '$primaryDark', color: 'white' }
    },
    separator: {
      normal: {
        '&:not(:last-child)::after': {
          content: '',
          width: '$1',
          height: '1px',
          background: '$tonal400',
          position: 'absolute',
          left: '$sizes$2'
        }
      },
      highlight: {
        '&:not(:last-child)::after': {
          content: '',
          width: '$1',
          height: '1px',
          background: '$primary',
          position: 'absolute',
          left: '$sizes$2'
        }
      }
    }
  }
})

export const ProgressIndicatorSteps: React.FC = () => {
  const {
    steps,
    goToStep,
    activeStep,
    viewedSteps,
    allowSkip
  } = useProgressIndicator()

  const handleStepClick = (index: number) => {
    if (!allowSkip) return
    goToStep(index)
  }

  const getBulletState = (index: number) => {
    if (activeStep === index) return 'active'
    if (viewedSteps.includes(index)) return 'viewed'
    return 'normal'
  }

  return (
    <Flex css={{ alignItems: 'center' }}>
      {steps.map((_, index) => {
        return (
          <StyledBullet
            key={`step_${index}`}
            as={allowSkip ? 'button' : 'div'}
            onClick={() => handleStepClick(index)}
            state={getBulletState(index)}
            separator={index < activeStep ? 'highlight' : 'normal'}
            aria-current={index === activeStep ? 'step' : undefined}
            aria-label={`step ${index + 1}`}
            css={{ cursor: allowSkip ? 'pointer' : 'auto' }}
          >
            {index + 1}
          </StyledBullet>
        )
      })}
    </Flex>
  )
}
