import * as React from 'react'
// Note: Only loading vimeo to reduce the bundle size  https://www.npmjs.com/package/react-player
import ReactPlayer from 'react-player/vimeo'

// import { styled } from '~/stitches' // TODO: switch to alias
import { Override } from '~/utilities/types'

import { styled } from '../../stitches'

const StyledVideo = styled(ReactPlayer, {})

type VideoProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledVideo>,
  {
    externalId: string
    width?: number | string
    height?: number | string
  }
>

export const Video: React.FC<VideoProps> = ({
  externalId,
  width = '100%',
  height = 405,
  ...remainingProps
}) => {
  return (
    <StyledVideo
      role="figure"
      url={`https://player.vimeo.com/video/${externalId}`}
      width={width}
      height={height}
      {...remainingProps}
    />
  )
}

Video.displayName = 'Video'
