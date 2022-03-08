import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { useStepper } from './stepper-context/StepperContext'
import { IStepperStepsProps } from './types'

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
  fontFamily: '$body',
  fontWeight: 400,
  fontSize: '$sm',
  '&:not(:first-child)': {
    ml: '$3'
  },
  '&:not(:last-child)::after': {
    content: '',
    height: '1px',
    position: 'absolute',
    left: '$sizes$2'
  },
  variants: {
    state: {
      normal: { bg: '$tonal50', color: '$tonal400' },
      active: { bg: '$primary', color: 'white' },
      viewed: { bg: '$primaryDark', color: 'white' }
    },
    separator: {
      normal: {
        '&:not(:last-child)::after': {
          bg: '$tonal50'
        }
      },
      highlight: {
        '&:not(:last-child)::after': {
          bg: '$primaryDark'
        }
      }
    }
  }
})

export const StepperSteps: React.FC<IStepperStepsProps> = ({
  stepsWidth,
  ...rest
}) => {
  const { steps, goToStep, activeStep, viewedSteps, allowSkip } = useStepper()

  const getBulletState = (index: number) => {
    if (activeStep === index) return 'active'
    if (viewedSteps.includes(index)) return 'viewed'
    return 'normal'
  }

  const getSeparatorState = (index: number) =>
    index < Math.max(...viewedSteps) ? 'highlight' : 'normal'

  return (
    <Flex
      css={{
        alignItems: 'center',
        width: stepsWidth || 'unset',
        justifyContent: 'space-between'
      }}
      {...rest}
    >
      {steps.map((_, index) => {
        return (
          <StyledBullet
            key={`step_${index}`}
            as={allowSkip ? 'button' : 'div'}
            onClick={() =>
              allowSkip && viewedSteps.includes(index)
                ? goToStep(index)
                : undefined
            }
            state={getBulletState(index)}
            separator={getSeparatorState(index)}
            aria-current={index === activeStep ? 'step' : undefined}
            aria-label={`step ${index + 1}`}
            css={{
              cursor:
                allowSkip && viewedSteps.includes(index) ? 'pointer' : 'auto',
              '&:not(:last-child)::after': {
                width: stepsWidth
                  ? `calc((${stepsWidth} - ($2 * ${steps.length})) / ${
                      steps.length - 1
                    })`
                  : '$1'
              }
            }}
          >
            {index + 1}
          </StyledBullet>
        )
      })}
    </Flex>
  )
}
