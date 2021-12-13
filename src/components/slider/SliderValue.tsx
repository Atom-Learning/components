import React from 'react'
import { SliderPointType } from '.'

import { Text } from '../text'

export type SliderValueType = {
  outputLabel: string
  emptyData?: SliderPointType
}

type SliderValueProps = SliderValueType & {
  value?: number[]
}

export const SliderValue: React.FC<SliderValueProps> = ({
  value = [],
  outputLabel = 'Current value is $VALUE',
  emptyData
}) => {
  if (value.length > 1) return null

  const outputValue = value.length > 0 ? value[0] : ''

  const outputString = outputLabel
    .replace('$VALUE', outputValue.toString())
    .replace('$S', outputValue > 1 ? 's' : '')

  return (
    <Text css={{ mt: '$4', color: '$tonal300', width: '100%' }}>
      {outputValue === emptyData?.value ? emptyData?.label : outputString}
    </Text>
  )
}
