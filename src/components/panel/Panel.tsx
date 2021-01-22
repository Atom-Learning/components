import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { Box } from '../../primitives'
import { styled } from '../../stitches'

const BasePanel = styled(Box, {
  backgroundColor: 'white',
  padding: '$5',
  boxShadow: '$2',
  borderRadius: '$4'
})

export const Panel = ({
  css,
  ...props
}: StitchesProps<typeof BasePanel>): React.ReactElement => (
  <BasePanel as="section" css={css} {...props} />
)
