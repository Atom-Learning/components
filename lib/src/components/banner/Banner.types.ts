import { styled } from 'stitches'

const StyledProperties = styled(() => null, {
  variants: {
    emphasis: {
      highContrast: {},
      midContrast: {},
      lowContrast: {}
    },
    size: {
      sm: {},
      md: {}
    }
  }
})

export type TBannerContextValue = React.ComponentProps<typeof StyledProperties>
