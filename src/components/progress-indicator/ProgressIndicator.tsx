import * as React from 'react'

import { Button } from '~/components/button'
import { Divider } from '~/components/divider'
import { Flex } from '~/components/flex'
import { Text } from '~/components/text'

import { useProgressIndicator } from './progress-indicator-context/ProgressIndicatorContext'

interface IProgressIndicatorProps {
  handleFinal: () => void
}

export const ProgressIndicator: React.FC<IProgressIndicatorProps> = ({
  handleFinal
}) => {
  const {
    steps,
    goToPreviousStep,
    goToNextStep,
    goToStep,
    activeStep,
    viewedSteps,
    allowSkip,
    labels
  } = useProgressIndicator()

  const handleStepClick = (index: number) => {
    if (!allowSkip) return
    goToStep(index)
  }

  const setStepBgColor = (
    index: number
  ): '$primaryDark' | '$primary' | '$tonal50' => {
    if (index === activeStep) return '$primary'

    if (viewedSteps.includes(index)) return '$primaryDark'

    return '$tonal50'
  }

  return (
    <Flex
      aria-label="progress"
      css={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <Button
        size="sm"
        appearance="outline"
        disabled={activeStep === 0}
        onClick={goToPreviousStep}
      >
        {labels?.back || 'Back'}
      </Button>
      <Flex>
        {steps.map((_, index) => {
          return (
            <Flex key={`step_${index}`} css={{ alignItems: 'center' }}>
              <Flex
                as={allowSkip ? 'button' : 'div'}
                onClick={() => handleStepClick(index)}
                css={{
                  cursor: allowSkip ? 'pointer' : 'auto',
                  p: '$2',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '$2',
                  height: '$2',
                  borderRadius: '50%',
                  border: 'none',
                  bg: setStepBgColor(index)
                }}
                aria-current={index === activeStep ? 'step' : false}
                aria-label={`step ${index + 1}`}
              >
                <Text
                  size="xs"
                  css={{
                    color:
                      viewedSteps.includes(index) || index === activeStep
                        ? 'white'
                        : '$tonal400'
                  }}
                >
                  {index + 1}
                </Text>
              </Flex>
              {index < steps.length - 1 && (
                <Divider
                  css={{
                    width: '$2',
                    bg: viewedSteps.includes(index) ? '$primary' : '$tonal400'
                  }}
                  orientation="horizontal"
                />
              )}
            </Flex>
          )
        })}
      </Flex>

      <Button
        size="sm"
        onClick={activeStep === steps.length - 1 ? handleFinal : goToNextStep}
      >
        {activeStep === steps.length - 1
          ? labels?.start || 'Start'
          : labels?.next || 'Next'}
      </Button>
    </Flex>
  )
}
