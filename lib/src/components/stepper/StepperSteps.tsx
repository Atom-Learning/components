import { Ok } from '@atom-learning/icons'
import * as React from 'react'

import { styled } from '~/stitches'

import { Flex } from '../flex'
import { Icon } from '../icon'
import { useStepper } from './stepper-context/StepperContext'
import { StepperStepBullet } from './StepperStepBullet'
import { StepperStepContainer } from './StepperStepContainer'
import { StepperStepLabel } from './StepperStepLabel'
import { IStepperStepsProps, Status } from './types'

const StepperStepsContainer = styled(Flex, {
  justifyContent: 'space-between',
  variants: {
    direction: {
      vertical: { flexDirection: 'column' },
      horizontal: { flexDirection: 'row' }
    }
  }
})

export const StepperSteps: React.FC<IStepperStepsProps> = ({ css }) => {
  const {
    steps,
    goToStep,
    activeStep,
    viewedSteps,
    allowSkip,
    direction,
    hideLabels
  } = useStepper()

  const getBulletStatus = (index: number) => {
    const activeBullet = steps[index]
    if (activeBullet.status) return activeBullet.status
    if (activeStep === index) return Status.ACTIVE
    if (viewedSteps.includes(index)) return Status.VIEWED
    return Status.DEFAULT
  }

  const getSeparatorStatus = (index: number) => {
    const bulletStatus = steps[index]?.status

    if (bulletStatus === Status.SUCCESS) {
      return Status.SUCCESS
    }

    if (bulletStatus === Status.VIEWED || index < Math.max(...viewedSteps)) {
      return Status.ACTIVE
    }

    return Status.DEFAULT
  }

  return (
    <StepperStepsContainer css={css} direction={direction}>
      {steps.map((step, index) => {
        const bulletStatus = getBulletStatus(index)
        const seperatorStatus = getSeparatorStatus(index)

        return (
          <StepperStepContainer
            key={`step_${index}`}
            direction={direction}
            separator={seperatorStatus}
            css={
              direction === 'horizontal'
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
              status={bulletStatus}
              aria-current={index === activeStep ? 'step' : undefined}
              aria-label={!step.label ? `step ${index + 1}` : ''}
              aria-labelledby={step.label ? `step-${index}` : undefined}
              css={{
                cursor:
                  allowSkip && viewedSteps.includes(index) ? 'pointer' : 'auto'
              }}
            >
              {step.status === 'success' ? <Icon is={Ok} /> : index + 1}
            </StepperStepBullet>

            {step.label && !hideLabels && (
              <StepperStepLabel
                as="span"
                id={`step-${index}`}
                direction={direction}
                status={bulletStatus}
              >
                {step.label}
              </StepperStepLabel>
            )}
          </StepperStepContainer>
        )
      })}
    </StepperStepsContainer>
  )
}
