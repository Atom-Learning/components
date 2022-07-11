import * as React from 'react'
import { Ok } from '@atom-learning/icons'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { Icon } from '../icon'
import { Text } from '../text'
import { Box } from '../box'

import { useStepper } from './stepper-context/StepperContext'

import { IStepperStepsProps } from './types'

const StyledBullet = styled(Flex, {
  p: '$2',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$3',
  height: '$3',
  borderRadius: '50%',
  border: 'none',
  bg: '$tonal50',
  fontFamily: '$body',
  fontWeight: 600,
  fontSize: '$md',
  variants: {
    state: {
      normal: { bg: '$tonal50', color: '$tonal400' },
      active: {
        bg: 'white',
        color: '$primary',
        border: '2px solid',
        borderColor: 'currentColor'
      },
      viewed: { bg: '$primary', color: 'white' },
      completed: { bg: '$success', color: 'white' }
    }
  }
})

const StepsContainer = styled(Flex, {
  justifyContent: 'space-between',
  variants: {
    orientation: {
      vertical: { flexDirection: 'column' },
      horizontal: { flexDirection: 'row' }
    }
  }
})

const BulletContainer = styled(Flex, {
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center'
})

const StepContainer = styled(Flex, {
  position: 'relative',
  [`&:not(:last-child) ${StyledBullet}`]: {
    '&::after': {
      content: '',
      position: 'absolute'
    }
  },
  variants: {
    orientation: {
      vertical: {
        flexDirection: 'row',
        alignItems: 'center',
        [`&:not(:last-child) ${StyledBullet}`]: {
          '&::after': {
            width: '4px !important',
            top: '100%'
          }
        }
      },
      horizontal: {
        flexDirection: 'column',
        alignItems: 'center',
        [`&:not(:last-child) ${StyledBullet}`]: {
          '&::after': {
            height: '4px !important',
            left: '100%'
          }
        }
      }
    },
    separator: {
      normal: {
        [`&:not(:last-child) ${StyledBullet}`]: {
          '&::after': {
            bg: '$tonal50'
          }
        }
      },
      highlight: {
        [`&:not(:last-child) ${StyledBullet}`]: {
          '&::after': {
            bg: '$primary'
          }
        }
      },
      success: {
        [`&:not(:last-child) ${StyledBullet}`]: {
          '&::after': {
            bg: '$success'
          }
        }
      }
    }
  }
})

const StepDescription = styled(Box, {
  variants: {
    orientation: {
      horizontal: { display: 'none' },
      vertical: { display: 'block', ml: '$4' }
    }
  }
})

export const StepperSteps: React.FC<IStepperStepsProps> = ({
  css,
  ...rest
}) => {
  const { steps, goToStep, activeStep, viewedSteps, allowSkip, orientation } =
    useStepper()

  const getBulletState = (index: number) => {
    const activeBullet = steps[index]
    if (activeBullet.status) return activeBullet.status
    if (activeStep === index) return 'active'
    if (viewedSteps.includes(index)) return 'viewed'
    return 'normal'
  }

  const getSeparatorState = (index: number) => {
    const bulletStatus = steps[index]?.status

    if (bulletStatus === 'completed') return 'success'

    if (
      bulletStatus === 'active' ||
      bulletStatus === 'viewed' ||
      index <= Math.max(...viewedSteps)
    )
      return 'highlight'

    return 'normal'
  }

  return (
    <StepsContainer css={css} {...rest} orientation={orientation}>
      {steps.map((step, index) => {
        return (
          <StepContainer
            key={`step_${index}`}
            orientation={orientation}
            separator={getSeparatorState(index)}
            css={{
              [`&:not(:last-child) ${StyledBullet}`]: {
                '&::after': {
                  width: css?.width
                    ? `calc((${css.width} - ($3 * ${steps.length})) / ${
                        steps.length - 1
                      })`
                    : '$1',
                  height: css?.height
                    ? `calc((${css.height} - ($3 * ${steps.length})) / ${
                        steps.length - 1
                      })`
                    : `$1`
                }
              }
            }}
          >
            <BulletContainer>
              <StyledBullet
                as={allowSkip ? 'button' : 'div'}
                onClick={() =>
                  allowSkip && viewedSteps.includes(index)
                    ? goToStep(index)
                    : undefined
                }
                state={getBulletState(index)}
                aria-current={index === activeStep ? 'step' : undefined}
                aria-label={`step ${index + 1}`}
                css={{
                  cursor:
                    allowSkip && viewedSteps.includes(index)
                      ? 'pointer'
                      : 'auto'
                }}
              >
                {step.status === 'completed' || step.status === 'viewed' ? (
                  <Icon is={Ok} data-testid="success-icon" />
                ) : (
                  index + 1
                )}
              </StyledBullet>
            </BulletContainer>

            {step.label && (
              <StepDescription orientation={orientation}>
                <Text>{step.label}</Text>
              </StepDescription>
            )}
          </StepContainer>
        )
      })}
    </StepsContainer>
  )
}
