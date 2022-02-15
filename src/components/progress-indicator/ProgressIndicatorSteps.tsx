import * as React from 'react'

import { styled } from '~/stitches'

import { Divider } from '../divider'
import { Flex } from '../flex'
import { Text } from '../text'
import { useProgressIndicator } from '.'

const StyledBullet = styled(Flex, {
  p: '$2',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$2',
  height: '$2',
  borderRadius: '50%',
  border: 'none',
  bg: '$tonal50',
  variants: {
    state: {
      normal: { bg: '$tonal50' },
      active: { bg: '$primary' },
      viewed: { bg: '$primaryDark' }
    }
  }
})

const StyledText = styled(Text, {
  variants: {
    color: {
      light: { color: 'white' },
      dark: { color: '$tonal400' }
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
    <Flex>
      {steps.map((_, index) => {
        return (
          <Flex key={`step_${index}`} css={{ alignItems: 'center' }}>
            <StyledBullet
              as={allowSkip ? 'button' : 'div'}
              onClick={() => handleStepClick(index)}
              state={getBulletState(index)}
              aria-current={index === activeStep ? 'step' : false}
              aria-label={`step ${index + 1}`}
              css={{ cursor: allowSkip ? 'pointer' : 'auto' }}
            >
              <StyledText
                size="xs"
                color={
                  viewedSteps.includes(index) || index === activeStep
                    ? 'light'
                    : 'dark'
                }
              >
                {index + 1}
              </StyledText>
            </StyledBullet>
            {index < steps.length - 1 && (
              <Divider
                css={{
                  width: '$2',
                  bg: index < activeStep ? '$primary' : '$tonal400'
                }}
                orientation="horizontal"
              />
            )}
          </Flex>
        )
      })}
    </Flex>
  )
}
