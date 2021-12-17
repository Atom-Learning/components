import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import * as React from 'react'

import { styled } from '~/stitches'
import { CSSWrapper } from '~/utilities'

import { SliderSteps, SliderStepsType } from './SliderSteps'
import { SliderValue } from './SliderValue'

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
  cursor: 'pointer',
  '&[data-orientation="horizontal"]': {
    height: '$1'
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: '$1'
  },
  '&[data-disabled]': { cursor: 'not-allowed', bg: '$tonal100' },
  variants: {
    theme: {
      light: {
        [`${StyledTrack}`]: { bg: '#fff' }
      },
      tonal: {
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
  '&[data-disabled]': { bg: '$tonal200', cursor: 'not-allowed' }
})

const StyledThumb = styled(Thumb, {
  bg: '$primaryMid',
  borderRadius: '$round',
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

export type SliderPointType = { label: string; value: number }

export type SliderProps = React.ComponentProps<typeof StyledSlider> &
  SliderStepsType

export const Slider: React.FC<SliderProps> & { Value: typeof SliderValue } = ({
  steps = [],
  value,
  defaultValue,
  min = 0,
  max = 100,
  theme = 'tonal',
  css,
  ...remainingProps
}) => {
  const values = value || defaultValue
  return (
    <CSSWrapper css={css}>
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
        {values?.length &&
          values.map((_, i) => <StyledThumb key={`thumb${i}`} />)}
      </StyledSlider>

      <SliderSteps min={min} max={max} steps={steps} />
    </CSSWrapper>
  )
}

Slider.Value = SliderValue

Slider.displayName = 'Slider'
