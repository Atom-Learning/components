/* 
  Disabled styling for elements.
*/

type disabledStyleReturnType = {
  opacity: number
  cursor: 'not-allowed'
}

export const disabledStyle = (): disabledStyleReturnType => {
  return {
    opacity: 0.3,
    cursor: 'not-allowed'
  }
}
