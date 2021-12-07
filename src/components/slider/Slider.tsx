import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import * as React from 'react'

import { styled } from '~/stitches'

import { Box } from '../box'
import { Text } from '../text'

const StyledTrack = styled(Track, {
  borderRadius: '$round',
  flexGrow: 1,
  position: 'relative',
  '&[data-orientation="horizontal"]': { height: '$space$1' },
  '&[data-orientation="vertical"]': { width: '$space$1' }
})

const StyledSlider = styled(Root, {
  alignItems: 'center',
  display: 'flex',
  position: 'relative',
  touchAction: 'none',
  userSelect: 'none',
  '&[data-orientation="horizontal"]': {
    height: '$0'
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: '$0'
  },
  '&[data-disabled]': { cursor: 'not-allowed' },
  variants: {
    theme: {
      light: {
        [`${StyledTrack}`]: { bg: '#fff' }
      },
      dark: {
        [`${StyledTrack}`]: { bg: '$tonal200' }
      }
    }
  }
})

const StyledRange = styled(Range, {
  bg: '$primary',
  borderRadius: '$round',
  height: '100%',
  position: 'absolute',
  '&[data-disabled]': { bg: '$tonal100', cursor: 'not-allowed' }
})

const StyledThumb = styled(Thumb, {
  bg: '$primaryMid',
  borderRadius: '$round',
  cursor: 'pointer',
  display: 'block',
  size: '$1',
  '&:hover': {
    bg: '$primaryDark'
  },
  '&:focus': {
    outline: '2px solid $primaryMid',
    outlineOffset: '2px'
  },
  '&[data-disabled]': { bg: '$tonal200', cursor: 'not-allowed' }
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

export type SliderProps = React.ComponentProps<typeof StyledSlider> & {
  steps: [{ value: number; label: string }]
}

export const Slider: React.FC<SliderProps> = ({
  steps = [],
  value,
  defaultValue,
  min = 0,
  max = 100,
  theme = 'light',
  ...remainingProps
}) => {
  const thumbs = value || defaultValue
  return (
    <>
      <StyledSlider
        theme={theme}
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        {...remainingProps}
      >
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        {thumbs?.length && thumbs.map((_, i) => <StyledThumb key={i} />)}
      </StyledSlider>

      {steps?.length > 0 && (
        <Box css={{ width: '100%', position: 'relative', mb: '$6' }}>
          {steps.map((step) => (
            <Text
              key={`sliderStep${step.label}`}
              css={{
                position: 'absolute',
                top: '$3',
                left: `${getPercentValue(step.value, min, max)}%`,
                transform: `translate(-${getTransformValue(
                  step.value,
                  min,
                  max
                )}%, 0)`,
                color: '$tonal300'
              }}
            >
              {step.label}
            </Text>
          ))}
        </Box>
      )}
    </>
  )
}

Slider.displayName = 'Slider'
