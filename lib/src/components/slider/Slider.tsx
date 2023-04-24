import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import * as React from 'react'
import { focusVisibleStyleBlock } from '~/utilities'

import { styled } from '~/stitches'
import { Box } from '~/components/box'

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
  background: 'red',
  alignItems: 'center',
  display: 'flex',
  position: 'relative',
  touchAction: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  '&[data-orientation="horizontal"]': {
    height: '$1',
    width: '100%'
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: '$1',
    height: '100%'
  },
  '&[data-disabled]': {
    opacity: 0.3,
    cursor: 'not-allowed'
  },
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
  position: 'absolute'
})

const StyledThumb = styled(Thumb, {
  bg: '$primaryMid',
  borderRadius: '$round',
  display: 'block',
  size: '$1',
  '&:hover': {
    bg: '$primaryDark'
  },
  '&:focus-visible': {
    ...focusVisibleStyleBlock()
  }
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
      orientation,
      ...remainingProps
    },
    ref
  ) => {
    const values = value || defaultValue
    return (
      <Box css={{
        width: orientation !== 'vertical' ? 100 : 'auto',
        height: orientation === 'vertical' ? 100 : 'auto',
        ...css
      }}>
        <StyledSlider
          theme={theme}
          defaultValue={defaultValue}
          value={value}
          min={min}
          max={max}
          ref={ref}
          orientation={orientation}
          {...remainingProps}
        >
          <StyledTrack>
            <StyledRange />
          </StyledTrack>
          {values?.length &&
            values.map((_, i) => <StyledThumb key={`thumb${i}`} />)}
        </StyledSlider>
        {children}
      </Box>
    )
  }
) as SliderType

Slider.Value = SliderValue
Slider.Steps = SliderSteps

Slider.displayName = 'Slider'
