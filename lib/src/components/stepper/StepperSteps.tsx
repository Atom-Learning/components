import { Ok } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { Icon } from '../icon'

import { StepperStepLabel } from './StepperStepLabel'
import { StepperStepContainer } from './StepperStepContainer'
import { StepperStepBullet } from './StepperStepBullet'

import { useStepper } from './stepper-context/StepperContext'
import { IStepperStepsProps, StatusEnum } from './types'

const StepperStepsContainer = styled(Flex, {
  justifyContent: 'space-between',
  variants: {
    orientation: {
      vertical: { flexDirection: 'column' },
      horizontal: { flexDirection: 'row', alignItems: 'center' }
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
          <StepperStepContainer
            key={`step_${index}`}
            orientation={orientation}
            separator={seperatorState}
            css={
              orientation === 'horizontal'
                ? { width: `calc(100% / ${steps.length})` }
                : { height: `calc(100% / ${steps.length})` }
            }
          >
            <StepperStepBullet
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
            </StepperStepBullet>

            {step.label && (
              <StepperStepLabel orientation={orientation} state={bulletState}>
                {step.label}
              </StepperStepLabel>
            )}
          </StepperStepContainer>
        )
      })}
    </StepperStepsContainer>
  )
}
