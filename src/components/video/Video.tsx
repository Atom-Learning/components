import * as React from 'react'
// Note: Only loading vimeo to reduce the bundle size  https://www.npmjs.com/package/react-player
import ReactPlayer from 'react-player/vimeo'

import { Box } from '~/components/box'
import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const StyledVideo = styled(ReactPlayer, {})

type VideoProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledVideo>,
  {
    id: string
    ratio?: number
  }
>

export const Video: React.FC<VideoProps> = ({
  id,
  ratio = 9 / 16,
  ...remainingProps
}) => (
  <Box
    css={{
      position: 'relative',
      paddingTop: `${ratio * 100}%`,
      overflow: 'hidden',
      height: 0,
      width: '100%'
    }}
  >
    <StyledVideo
      role="figure"
      url={`https://player.vimeo.com/video/${id}`}
      {...remainingProps}
      height="100%"
      width="100%"
      css={{ position: 'absolute', top: 0, left: 0 }}
    />
  </Box>
)

Video.displayName = 'Video'
