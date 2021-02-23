import * as React from 'react'
// Note: Only loading vimeo to reduce the bundle size  https://www.npmjs.com/package/react-player
import ReactPlayer from 'react-player/vimeo'

// TODO: add styled

// TODO: add mdx

type VideoProps = {
  externalId: string
  width?: number | string
  height?: number | string
  lightPlayer?: boolean
}

export const Video: React.FC<VideoProps> = ({
  externalId,
  width = '100%',
  height = 405,
  lightPlayer,
  ...remainingProps
}) => {
  const showControls = !lightPlayer

  return (
    <ReactPlayer
      role="figure"
      url={`https://player.vimeo.com/video/${externalId}`}
      width={width}
      height={height}
      playing={lightPlayer || undefined} // true or false to pause or play the media
      muted={lightPlayer || undefined} // Mutes the player
      controls={showControls}
      light={lightPlayer || undefined} // true to show just the video thumbnail, which loads the full player on click
      {...remainingProps}
    />
  )
}

Video.displayName = 'Video'
