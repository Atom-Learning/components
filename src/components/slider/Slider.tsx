import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledTrack = styled(Track, {
  bg: 'white',
  borderRadius: '$round',
  flexGrow: 1,
  position: 'relative',
  '&[data-orientation="horizontal"]': { height: '$0' },
  '&[data-orientation="vertical"]': { width: '$0' }
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
    border: {
      none: {
        [`${StyledTrack}`]: { border: '0' }
      },
      solid: {
        [`${StyledTrack}`]: { border: '1px inset $tonal200' }
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

export type SliderProps = React.ComponentProps<typeof StyledSlider>

export const Slider: React.FC<SliderProps> = ({
  value,
  defaultValue,
  border = 'solid',
  ...remainingProps
}) => {
  const thumbs = value || defaultValue
  return (
    <StyledSlider
      border={border}
      defaultValue={defaultValue}
      value={value}
      {...remainingProps}
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      {thumbs?.length && thumbs.map((_, i) => <StyledThumb key={i} />)}
    </StyledSlider>
  )
}

Slider.displayName = 'Slider'
