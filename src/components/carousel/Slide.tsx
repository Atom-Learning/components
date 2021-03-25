import { Slide as BaseSlide } from 'pure-react-carousel'
import * as React from 'react'

import { Box } from '~/components'
import { styled } from '~/stitches'

const StyledSlide = styled(BaseSlide, {
  opacity: '0.7',
  transition: 'all 0.25s ease-in',
  '&[aria-selected="true"]': {
    opacity: 1,
    // apply box shadow to the Slide content directly,
    // not the wrappers added internally
    '& > div > div > *': {
      boxShadow: '$1'
    }
  }
})

type SlideProps = /* React.ComponentProps<typeof StyledSlide> &  */{ index: number }

export const Slide: React.FC<SlideProps> = ({ children, ...rest }) => {
  return (
    <StyledSlide {...rest} /* tag="div" */>
      {/* padding to create the gap between slides */}
      <Box css={{ px: '$3' }}>{children}</Box>
    </StyledSlide>
  )
}
