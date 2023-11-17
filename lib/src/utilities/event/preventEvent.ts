/*
Used to block default radix hover to open menu behaviour
Props: https://github.com/radix-ui/primitives/issues/1630
*/
export const preventEvent = (
  event: React.PointerEvent | Event | React.SyntheticEvent
): void => {
  const e = event as Event
  e.preventDefault()
}
