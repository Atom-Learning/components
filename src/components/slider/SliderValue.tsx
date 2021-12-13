import * as React from 'react'
import { SliderPointType } from '.'

import { Text } from '../text'

export type SliderValueType = {
  outputLabel: string
  emptyData?: SliderPointType
  item?: { single: string; plural: string }
}

type SliderValueProps = SliderValueType & {
  value?: number[]
}

export const SliderValue: React.FC<SliderValueProps> = ({
  value = [],
  outputLabel = 'Current value is $VALUE',
  emptyData,
  item = { single: '', plural: '' }
}) => {
  if (value.length > 1) return null

  const outputValue = value.length > 0 ? value[0] : ''

  const outputString = outputLabel
    .replace('$VALUE', outputValue.toString())
    .replace('$ITEM', outputValue === 1 ? item?.single : item?.plural)

  return (
    <Text css={{ mt: '$4', color: '$tonal300', width: '100%' }}>
      {outputValue === emptyData?.value ? emptyData?.label : outputString}
    </Text>
  )
}
