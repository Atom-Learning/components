import * as React from 'react'
// Note: Only loading vimeo to reduce the bundle size  https://www.npmjs.com/package/react-player
import ReactPlayer from 'react-player/vimeo'

import { Box } from '~/components/box'
import { CSS, styled } from '~/stitches'
import { CSSWrapper } from '~/utilities/css-wrapper'
import { Override } from '~/utilities/types'

const StyledVideo = styled(ReactPlayer, {})

type VideoProps = Override<
  React.ComponentProps<typeof StyledVideo>,
  {
    id: string
    ratio?: number
    css?: CSS
  }
>

export const Video: React.ForwardRefExoticComponent<VideoProps> =
  React.forwardRef(({ id, ratio = 9 / 16, css, ...remainingProps }, ref) => (
    <CSSWrapper css={css}>
      <Box
        css={{
          borderRadius: '$0',
          position: 'relative',
          paddingTop: `${ratio * 100}%`,
          overflow: 'hidden',
          height: 0,
          width: '100%'
        }}
      >
        <StyledVideo
          {...remainingProps}
          role="figure"
          url={`https://player.vimeo.com/video/${id}`}
          height="100%"
          width="100%"
          css={{ position: 'absolute', top: 0, left: 0 }}
          ref={ref}
        />
      </Box>
    </CSSWrapper>
  ))

Video.displayName = 'Video'
