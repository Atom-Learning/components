import * as React from 'react'
// Note: Only loading vimeo to reduce the bundle size  https://www.npmjs.com/package/react-player
import ReactPlayer from 'react-player/vimeo'

import { styled } from '~/stitches'
import { CSSWrapper } from '~/utilities'
import { Override } from '~/utilities/types'

const StyledVideo = styled(ReactPlayer, {})

type VideoProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledVideo>,
  {
    externalId: string
    ratio: number
  }
>

export const Video: React.FC<VideoProps> = ({
  externalId,
  ratio = 9 / 16,
  ...remainingProps
}) => {
  return (
    <CSSWrapper css={{ paddingTop: ratio }}>
      <StyledVideo
        role="figure"
        url={`https://player.vimeo.com/video/${externalId}`}
        {...remainingProps}
        height="100%"
        width="100%"
      />
    </CSSWrapper>
  )
}

Video.displayName = 'Video'
