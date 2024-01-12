import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import * as React from 'react'

import { styled } from '~/stitches'
import { CSSWrapper, disabledStyle } from '~/utilities'

import { SliderSteps } from './SliderSteps'
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
  '&[data-disabled]': disabledStyle,
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
  bg: '$primary800',
  borderRadius: '$round',
  height: '100%',
  position: 'absolute',
  '&[data-disabled]': disabledStyle
})

const StyledThumb = styled(Thumb, {
  bg: '$primary900',
  borderRadius: '$round',
  display: 'block',
  size: '$1',
  '&:hover': {
    bg: '$primary1000'
  },
  '&:focus': {
    outline: '2px solid $primary900',
    outlineOffset: '2px'
  },
  '&[data-disabled]': disabledStyle
})

export type SliderProps = React.ComponentProps<typeof StyledSlider>

type SliderType = React.ForwardRefExoticComponent<SliderProps> & {
  Value: typeof SliderValue
  Steps: typeof SliderSteps
}

export const Slider: SliderType = React.forwardRef(
  (
    {
      value,
      defaultValue,
      min = 0,
      max = 100,
      theme = 'tonal',
      css,
      children,
      ...remainingProps
    },
    ref
  ) => {
    const values = value || defaultValue
    return (
      <CSSWrapper css={css}>
        <StyledSlider
          theme={theme}
          defaultValue={defaultValue}
          value={value}
          min={min}
          max={max}
          ref={ref}
          {...remainingProps}
        >
          <StyledTrack>
            <StyledRange />
          </StyledTrack>
          {values?.length &&
            values.map((_, i) => <StyledThumb key={`thumb${i}`} />)}
        </StyledSlider>
        {children}
      </CSSWrapper>
    )
  }
) as SliderType

Slider.Value = SliderValue
Slider.Steps = SliderSteps

Slider.displayName = 'Slider'
