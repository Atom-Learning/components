import * as React from 'react'

import { Flex } from '../flex'
import { Image } from '../image'

export const BannerImage: React.ComponentProps<typeof Image> = (props) => {
  return (
    <Flex>
      <Image {...props} />
    </Flex>
  )
}

BannerImage.displayName = 'BannerImage'
