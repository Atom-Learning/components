import * as React from 'react'

import { Box } from '../box'
import { Flex } from '../flex'
import { Image } from '../image'

export const BannerImage: React.FC<
  Pick<React.ComponentProps<typeof Image>, 'src'>
> = ({ src }) => {
  return (
    <Flex
      css={{
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        css={{
          backgroundImage: `url(${src})`,
          height: '100%',
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </Flex>
  )
}

BannerImage.displayName = 'BannerImage'
