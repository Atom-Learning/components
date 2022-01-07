import * as React from 'react'

import { Text } from '../text'

export type SliderValueType = {
  outputLabel?: (value: number | number[]) => string
}

type SliderValueProps = SliderValueType & {
  value?: number[]
}

export const SliderValue: React.FC<SliderValueProps> = ({
  value = [],
  outputLabel = (value) => `Current value is ${value}`
}) => {
  return (
    <Text css={{ mt: '$4', color: '$tonal300', width: '100%' }}>
      {outputLabel(value.length === 1 ? value[0] : value)}
    </Text>
  )
}
