import * as React from 'react'

import { Box } from '~/components/box'
import { Flex } from '~/components/flex'
import { Icon, StyledIcon } from '~/components/icon'
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
            if (child?.type === Icon) console.log('is icon', toIconSize[size])
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

export interface IChipRootProps {
  size: 'sm' | 'md' | 'lg'
}

export const ChipRootProvider: React.FC<IChipRootProps> = ({
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

// (!) `is` rather than `as` because I THINK `as` is getting overwritten when used with an `asChild` parent
const ChipRoot: React.ForwardRefExoticComponent<
  typeof StyledRoot & { is: React.Component }
> = React.forwardRef(({ is, size = 'md', ...rest }, ref) => {
  return (
    <ChipRootProvider size={size}>
      <StyledRoot as={is} ref={ref} size={size} {...rest} />
    </ChipRootProvider>
  )
})

export const Chip = { Root: ChipRoot, Content: ChipContent }
