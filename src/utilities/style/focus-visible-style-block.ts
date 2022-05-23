/* 
  Focus styling for block element.
*/

type focusVisibleStyleBlockPropsType = {
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky'
  zIndex?: number
}

type focusVisibleStyleBlockReturnType = {
  outline: 'none'
  position: string
  zIndex: number
  boxShadow: string
}

export const focusVisibleStyleBlock = ({
  position = 'relative',
  zIndex = 1
}: focusVisibleStyleBlockPropsType = {}): focusVisibleStyleBlockReturnType => {
  return {
    outline: 'none',
    position: ['relative', 'absolute', 'fixed', 'sticky'].includes(position)
      ? position
      : 'relative',
    zIndex: zIndex > 1 ? zIndex : 1,
    boxShadow: 'white 0px 0px 0px 2px, $colors$primary 0px 0px 0px 4px'
  }
}
