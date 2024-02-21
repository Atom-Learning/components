import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { Icon } from '~/components/icon'
import { getTextVariant } from '~/components/text'
import { styled } from '~/stitches'
import { overrideStitchesVariantValue } from '~/utilities/override-stitches-variant-value/overrideStitchesVariantValue'

const overflowElipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}
export const StyledChipContent = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  px: '$1',
  flexGrow: 1,
  ...overflowElipsis,
  '& > *:not(:last-child)': {
    mr: '$1'
  }
})

const toIconSize = { sm: 'sm', md: 'sm', lg: 'md' }

export const ChipIcon: typeof Icon = ({ ...props }) => {
  const rootContext = React.useContext(ChipRootContext)
  const { size } = rootContext
  const iconSize = React.useMemo(
    () => overrideStitchesVariantValue(size, (s) => toIconSize[s]),
    [size]
  )
  return <Icon {...props} size={iconSize} />
}

const ChipContent = ({ children, ...rest }) => {
  const childrenArray = React.Children.toArray(children)
  const isSingleChild = childrenArray.length <= 1
  return (
    <StyledChipContent {...rest}>
      {
        childrenArray.map((child, index) => {
          if (!isSingleChild && typeof child === 'string')
            return (
              <Box as="span" css={overflowElipsis} key={child}>
                {child}
              </Box>
            )
          if (React.isValidElement(child) && child.type === Icon) {
            return <ChipIcon key={`icon-${index}`} {...child.props} />
          }
          return child
        }) as React.ReactElement[]
      }
    </StyledChipContent>
  )
}

export const StyledRoot = styled(Flex, {
  px: '$2',
  border: '1px solid',
  borderRadius: '$0',
  alignItems: 'center',
  fontFamily: '$body',
  maxWidth: '100%',
  borderColor: '$primary800',
  color: '$primary900',
  bg: '$primary100',
  '&[data-disabled]': {
    opacity: '0.3',
    pointerEvents: 'none'
  },
  variants: {
    size: {
      sm: {
        height: '$2',
        ...getTextVariant({ size: 'sm' })
      },
      md: {
        height: '$3',
        ...getTextVariant({ size: 'sm' })
      },
      lg: {
        height: '$4',
        ...getTextVariant({ size: 'md' })
      }
    }
  }
})

export type TChipRootContext = React.ComponentProps<typeof StyledRoot>
export type TChipRootProviderProps = TChipRootContext

export const ChipRootContext = React.createContext<TChipRootContext>({})

export const ChipRootProvider = ({
  size,
  children
}: TChipRootProviderProps) => {
  const value = React.useMemo<TChipRootContext>(() => ({ size }), [size])
  return (
    <ChipRootContext.Provider value={value}>
      {children}
    </ChipRootContext.Provider>
  )
}

export type TChipRootProps = TChipRootProviderProps

const ChipRoot: React.ForwardRefExoticComponent<TChipRootProps> =
  React.forwardRef(({ size = 'md', ...rest }, ref) => {
    return (
      <ChipRootProvider size={size}>
        <StyledRoot ref={ref} size={size} {...rest} />
      </ChipRootProvider>
    )
  })

type TChipType = typeof ChipRoot & {
  Content: typeof ChipContent
  Icon: typeof ChipIcon
}

export const Chip = ChipRoot as TChipType
Chip.Content = ChipContent
Chip.Icon = ChipIcon
Chip.displayName = 'Chip'
