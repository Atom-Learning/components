import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { styled } from '../../stitches'

export const BaseImage = styled('img', {})

export const Image = (
  props: StitchesProps<typeof BaseImage>
): React.ReactElement => <BaseImage {...props} />
