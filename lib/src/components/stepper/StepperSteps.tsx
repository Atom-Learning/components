import { Ok } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { Icon } from '../icon'
import { Text } from '../text'
import { useStepper } from './stepper-context/StepperContext'
import { IStepperStepsProps, StatusEnum } from './types'

const StyledBullet = styled(Flex, {
  position: 'relative',
  p: '$2',
  justifyContent: 'center',
  alignItems: 'center',
  size: '$3',
  borderRadius: '50%',
  border: 'none',
  bg: '$tonal50',
  zIndex: 1,
  variants: {
    state: {
      normal: { bg: '$tonal50', color: '$tonal400' },
      active: {
        bg: 'white',
        color: '$primaryMid',
        border: '2px solid',
        borderColor: 'currentColor'
      },
      viewed: { bg: '$primary', color: 'white' },
      success: { bg: '$success', color: 'white' }
    }
  }
})

const StepperStepsContainer = styled(Flex, {
  justifyContent: 'space-between',
  variants: {
    orientation: {
      vertical: { flexDirection: 'column' },
      horizontal: { flexDirection: 'row', alignItems: 'center' }
    }
  }
})

const StepContainer = styled(Flex, {
  position: 'relative',
  fontFamily: '$body',
  fontWeight: 600,
  fontSize: '$md',
  '&:not(:last-child)::after': {
    content: '',
    position: 'absolute'
  },
  variants: {
    orientation: {
      vertical: {
        py: '$3',
        flexDirection: 'row',
        alignItems: 'center',
        '&:not(:last-child)::after': {
          height: '100%',
          width: '4px',
          left: '14px',
          top: '50%'
        }
      },
      horizontal: {
        px: '$2',
        flexDirection: 'column',
        alignItems: 'center',
        '&:not(:last-child)::after': {
          width: '100%',
          height: '4px',
          left: '50%',
          top: '14px'
        }
      }
    },
    separator: {
      normal: { '&:not(:last-child)::after': { bg: '$tonal50' } },
      active: { '&:not(:last-child)::after': { bg: '$primary' } },
      success: { '&:not(:last-child)::after': { bg: '$success' } }
    }
  }
})

const Label = styled(Text, {
  fontWeight: 600,
  textAlign: 'center',
  variants: {
    orientation: {
      vertical: { ml: '$3' },
      horizontal: { mt: '$3' }
    },
    state: {
      normal: { color: '$tonal400', fontWeight: 400 },
      active: {
        color: '$primaryMid'
      },
      viewed: { color: '$primary' },
      success: { color: '$success' }
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
    if (activeStep === index) return StatusEnum.ACTIVE
    if (viewedSteps.includes(index)) return StatusEnum.VIEWED
    return StatusEnum.NORMAL
  }

  const getSeparatorState = (index: number) => {
    const bulletStatus = steps[index]?.status

    if (bulletStatus === StatusEnum.SUCCESS) {
      return StatusEnum.SUCCESS
    }

    if (
      bulletStatus === StatusEnum.VIEWED ||
      index < Math.max(...viewedSteps)
    ) {
      return StatusEnum.ACTIVE
    }

    return StatusEnum.NORMAL
  }

  return (
    <StepperStepsContainer css={css} {...rest} orientation={orientation}>
      {steps.map((step, index) => {
        const bulletState = getBulletState(index)
        const seperatorState = getSeparatorState(index)

        return (
          <StepContainer
            key={`step_${index}`}
            orientation={orientation}
            separator={seperatorState}
            css={
              orientation === 'horizontal'
                ? { width: `calc(100% / ${steps.length})` }
                : { height: `calc(100% / ${steps.length})` }
            }
          >
            <StyledBullet
              as={allowSkip ? 'button' : 'div'}
              onClick={() =>
                allowSkip && viewedSteps.includes(index)
                  ? goToStep?.(index)
                  : undefined
              }
              state={bulletState}
              aria-current={index === activeStep ? 'step' : undefined}
              aria-label={`step ${index + 1}`}
              css={{
                cursor:
                  allowSkip && viewedSteps.includes(index) ? 'pointer' : 'auto'
              }}
            >
              {step.status === 'success' ? (
                <Icon is={Ok} data-testid="success-icon" />
              ) : (
                index + 1
              )}
            </StyledBullet>

            {step.label && (
              <Label orientation={orientation} state={bulletState}>
                {step.label}
              </Label>
            )}
          </StepContainer>
        )
      })}
    </StepperStepsContainer>
  )
}
