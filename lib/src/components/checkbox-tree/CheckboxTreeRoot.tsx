import * as React from 'react'
import { Root } from '@radix-ui/react-dropdown-menu'

import { styled } from '~/stitches'

type TCheckboxValue = string | number

interface ICheckboxTreeRootContext {
  checked: TCheckboxValue[],
  handleCheckedChange: (checked: boolean, value: TCheckboxValue) => void,
  mounted: TCheckboxValue[],
  handleMountedChange: (mounted: boolean, value: TCheckboxValue) => void,
}

export const CheckboxTreeRootContext = React.createContext<ICheckboxTreeRootContext>({
  checked: [],
  handleCheckedChange: (checked, value) => undefined,
  mounted: [],
  handleMountedChange: (mounted, value) => undefined,

})

type TCheckboxTreeRootProps = {
  checked: TCheckboxValue[],
  defaultChecked: TCheckboxValue[],
  onCheckedChange?: (open: boolean) => void
} & React.ComponentProps<typeof StyledCheckboxTreeRoot>

const CheckboxTreeRootProvider: React.FC<TCheckboxTreeRootProps> = ({
  checked: forcedChecked,
  defaultChecked = [],
  onCheckedChange = () => { },
  ...rest
}) => {
  const checkedSetRef = React.useRef(new Set())
  const [checked, setChecked] = React.useState(defaultChecked)

  React.useEffect(() => { onCheckedChange(checked) }, [checked])

  React.useEffect(() => { if (forcedChecked) setChecked(forcedChecked) }, [forcedChecked])

  const handleCheckedChange = React.useCallback((newChecked, value) => {
    newChecked ? checkedSetRef.current.add(value) : checkedSetRef.current.delete(value)
    setChecked(Array.from(checkedSetRef.current))
  }, [])

  const mountedSetRef = React.useRef(new Set())
  const [mounted, setMounted] = React.useState([])

  const handleMountedChange = React.useCallback((newMounted, value) => {
    newMounted ? mountedSetRef.current.add(value) : mountedSetRef.current.delete(value)
    setMounted(Array.from(mountedSetRef.current))
  }, [])

  const value = React.useMemo<ICheckboxTreeRootContext>(
    () => ({ checked, handleCheckedChange, mounted, handleMountedChange }),
    [checked, handleCheckedChange, , mounted, handleMountedChange]
  )

  return (
    <CheckboxTreeRootContext.Provider value={value} {...rest} />
  )
}

const StyledCheckboxTreeRoot = styled(Root, {})

// const CheckboxTreeRootInternal = (props) => null

export const CheckboxTreeRoot = ({ checked, defaultChecked, onCheckedChange, ...rest }) => (
  <CheckboxTreeRootProvider checked={checked} defaultChecked={defaultChecked} onCheckedChange={onCheckedChange} {...rest} />
)
