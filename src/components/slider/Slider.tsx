import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import * as React from 'react'

import { styled } from '~/stitches'

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
  }
})

const StyledTrack = styled(Track, {
  bg: 'white',
  border: '1px inset $tonal200',
  borderRadius: '$round',
  flexGrow: 1,
  position: 'relative',
  '&[data-orientation="horizontal"]': { height: '$0' },
  '&[data-orientation="vertical"]': { width: '$0' }
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
  cursor: 'pointer',
  display: 'block',
  size: '$1',
  '&:hover': {
    bg: '$primaryDark'
  },
  '&:focus': {
    outline: '2px solid $primary',
    outlineOffset: '2px'
  }
})

type SliderProps = React.ComponentProps<typeof StyledSlider>

export const Slider: React.FC<SliderProps> & {
  Thumb: typeof StyledThumb
} = ({ children, css, ...remainingProps }) => (
  <StyledSlider css={css} {...remainingProps}>
    <StyledTrack>
      <StyledRange />
    </StyledTrack>
    {children}
  </StyledSlider>
)

Slider.Thumb = StyledThumb
Slider.displayName = 'Slider'
