import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { StyledIcon } from '~/components/icon'
import { textVariantSize } from '~/components/text'
import { styled } from '~/stitches'

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
const ChipContent = ({ children, ...rest }) => {
  const rootContext = React.useContext(ChipRootContext)
  const { size } = rootContext

  const childrenArray = React.Children.toArray(children)
  const isSingleChild = childrenArray.length <= 1
  return (
    <StyledChipContent {...rest}>
      {
        childrenArray.map((child) => {
          if (!isSingleChild && typeof child === 'string')
            return (
              <Box as="span" css={overflowElipsis} key={child}>
                {child}
              </Box>
            )
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              size: toIconSize[size]
            })
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
  borderColor: '$primary',
  color: '$primaryMid',
  bg: '$primaryLight',
  '&[data-disabled]': {
    opacity: '0.3',
    pointerEvents: 'none'
  },
  [`& ${StyledIcon}`]: {
    flexShrink: 0,
    color: 'currentColor'
  },
  variants: {
    size: {
      sm: { height: '$2', ...textVariantSize({ applyCapsize: true }).sm },
      md: { height: '$3', ...textVariantSize({ applyCapsize: true }).sm },
      lg: { height: '$4', ...textVariantSize({ applyCapsize: true }).md }
    }
  }
})

export interface IChipRootContext {
  size: 'sm' | 'md' | 'lg'
}

export const ChipRootContext = React.createContext<IChipRootContext>({
  size: 'md'
})

export interface IChipRootProviderProps {
  size: 'sm' | 'md' | 'lg'
}

export const ChipRootProvider: React.FC<IChipRootProviderProps> = ({
  size,
  children
}) => {
  const value = React.useMemo<IChipRootContext>(() => ({ size }), [size])
  return (
    <ChipRootContext.Provider value={value}>
      {children}
    </ChipRootContext.Provider>
  )
}

export type TChipRootProps = React.ComponentProps<typeof StyledRoot> & {
  size?: 'sm' | 'md' | 'lg'
  asWorkaround?: React.ElementType // (!?) `asWorkaround` rather than `as` because, it seems, when we extend this via `styled()` stitches overrides this component from the first argument for the value in `as`
}

const ChipRoot: React.ForwardRefExoticComponent<TChipRootProps> =
  React.forwardRef(({ asWorkaround, size = 'md', ...rest }, ref) => {
    return (
      <ChipRootProvider size={size}>
        <StyledRoot ref={ref} as={asWorkaround} size={size} {...rest} />
      </ChipRootProvider>
    )
  })

type TChipType = typeof ChipRoot & {
  Content: typeof ChipContent
}

export const Chip = ChipRoot as TChipType
Chip.Content = ChipContent
Chip.displayName = 'Chip'
