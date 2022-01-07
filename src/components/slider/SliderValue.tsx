import * as React from 'react'

import { Text } from '../text'

export type SliderValueType = {
  outputLabel?: (value) => string
}

type SliderValueProps = SliderValueType & {
  value?: number[]
}

export const SliderValue: React.FC<SliderValueProps> = ({
  value = [],
  outputLabel = (value) => `Current value is ${value}`
}) => {
  if (value.length !== 1) return null

  return (
    <Text css={{ mt: '$4', color: '$tonal300', width: '100%' }}>
      {outputLabel(value[0])}
    </Text>
  )
}
