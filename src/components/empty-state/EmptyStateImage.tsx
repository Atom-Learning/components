import * as React from 'react'

import { Image } from '~/components/image'

type EmptyStateImage = React.ComponentProps<typeof Image>

export const EmptyStateImage: React.FC<EmptyStateImage> = (props) => (
  <Image {...props} />
)
