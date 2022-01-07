import * as React from 'react'

import { styled } from '~/stitches'

import { Text } from '../text'

export type SliderStepsType = {
  steps: { label: string; value: number }[]
}

type SliderStepsProps = {
  min: number
  max: number
} & SliderStepsType

const SliderStepsContainer = styled('div', {
  height: '$space$3',
  mt: '$3',
  position: 'relative',
  width: '100%'
})

const getPercentValue = (value: number, min: number, max: number): number => {
  return ((value - min) / (max - min)) * 100
}

const getTransformValue = (value: number, min: number, max: number): number => {
  const percentage = getPercentValue(value, min, max)

  if (percentage <= 10) return 0
  if (percentage >= 90) return 100
  return 50
}

export const SliderSteps: React.FC<SliderStepsProps> = ({
  min,
  max,
  steps
}) => {
  if (steps.length === 0) return null

  return (
    <SliderStepsContainer>
      {steps.map((step) => (
        <Text
          as="span"
          key={step.value}
          css={{
            position: 'absolute',
            color: '$tonal300'
          }}
          style={{
            left: `${getPercentValue(step.value, min, max)}%`,
            transform: `translateX(-${getTransformValue(
              step.value,
              min,
              max
            )}%)`
          }}
        >
          {step.label}
        </Text>
      ))}
    </SliderStepsContainer>
  )
}
