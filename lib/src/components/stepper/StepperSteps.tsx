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
    hideLabels,
    completedSteps,
    showCompletedIcons
  } = useStepper()

  const getBulletStatus = (index: number) => {
    const activeBullet = steps[index]

    if (activeBullet.status) return activeBullet.status
    if (completedSteps.length === steps.length) return Status.SUCCESS
    if (activeStep === index && completedSteps.includes(activeStep))
      return Status.REVIEWED
    if (activeStep === index) return Status.ACTIVE
    if (completedSteps.includes(index)) return Status.COMPLETED
    if (viewedSteps.includes(index)) return Status.VIEWED
    return Status.DEFAULT
  }

  const getSeparatorStatus = (index: number) => {
    const bulletStatus = steps[index]?.status

    if (completedSteps.length === steps.length) {
      return Status.SUCCESS
    }

    if (bulletStatus === Status.SUCCESS) {
      return Status.SUCCESS
    }

    if (bulletStatus === Status.COMPLETED || index < Math.max(...viewedSteps)) {
      return Status.ACTIVE
    }

    if (bulletStatus === Status.VIEWED) {
      return Status.VIEWED
    }

    return Status.DEFAULT
  }

  return (
    <StepperStepsContainer css={css} direction={direction}>
      {steps.map((step, index) => {
        const bulletStatus = getBulletStatus(index)
        const separatorStatus = getSeparatorStatus(index)

        return (
          <StepperStepContainer
            tabIndex={0}
            key={`step_${index}`}
            direction={direction}
            separator={separatorStatus}
            status={bulletStatus}
            css={
              direction === 'horizontal'
                ? { width: `calc(100% / ${steps.length})` }
                : { height: `calc(100% / ${steps.length})` }
            }
            canInteract={allowSkip}
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
              {step.status === Status.SUCCESS ||
              (showCompletedIcons && bulletStatus === Status.COMPLETED) ? (
                <Icon is={Ok} />
              ) : (
                index + 1
              )}
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
