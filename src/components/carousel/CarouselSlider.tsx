import { Slider as BaseSlider } from 'pure-react-carousel'

import { styled } from '~/stitches'

export const CarouselSlider = styled(BaseSlider, {
  cursor: 'grab',
  ml: '50%',
  overflow: 'hidden',
  transform: 'translateX(-50%)',
  '& [class*="sliderTray_"]': {
    p: 'unset',
    m: 'unset',
    transition: 'transform .5s cubic-bezier(.645,.045,.355,1)'
  },
  '& [class*="slide_"]': {
    float: 'left',
    pb: '0 !important'
  },
  '& [class*="slideInner"]': {
    display: 'flex',
    justifyContent: 'center'
  },
  variants: {
    overflow: {
      true: {
        overflow: 'visible'
      }
    }
  }
})
