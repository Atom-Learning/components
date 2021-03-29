import { Slide as BaseSlide } from 'pure-react-carousel'
import * as React from 'react'

import { Box } from '~/components'
import { styled } from '~/stitches'

const StyledSlide = styled(BaseSlide, {})

type SlideProps = React.ComponentProps<typeof StyledSlide> & { index: number }

export const Slide: React.FC<SlideProps> = ({ children, ...rest }) => {
  return (
    <StyledSlide {...rest} tag="div">
      {/* padding to create the gap between slides */}
      <Box css={{ px: '$3' }}>{children}</Box>
    </StyledSlide>
  )
}
