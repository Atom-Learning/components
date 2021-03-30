import { Slider as BaseSlider } from 'pure-react-carousel'

import { styled } from '~/stitches'

export const Slider = styled(BaseSlider, {
  cursor: 'grab',
  ml: '50%',
  overflow: 'hidden',
  transform: 'translateX(-50%)',
  '& div[class*="sliderTray_"]': {
    transition: 'transform .5s cubic-bezier(.645,.045,.355,1)'
  },
  '& div[class*="slide_"]': {
    float: 'left',
    pb: '0 !important'
  },
  '& div[class*="slideInner"]': {
    display: 'flex',
    justifyContent: 'center'
  },
  variants: {
    type: {
      overflow: {
        overflow: 'visible'
      }
    }
  }
})
