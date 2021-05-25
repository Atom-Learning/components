import { Slide as BaseSlide } from 'pure-react-carousel'
import * as React from 'react'

import { Box } from '~/components/box'
import { styled } from '~/stitches'

const StyledSlide = styled(BaseSlide, {})

type SlideProps = React.ComponentProps<typeof StyledSlide> & { index: number }

export const CarouselSlide: React.FC<SlideProps> = ({
  children,
  ...remainingProps
}) => (
  <StyledSlide {...remainingProps} tag="div">
    {/* padding to create the gap between slides */}
    <Box css={{ px: '$3' }}>{children}</Box>
  </StyledSlide>
)
