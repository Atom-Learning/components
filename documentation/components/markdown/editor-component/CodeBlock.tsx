// @ts-nocheck

import * as Components from '@atom-learning/components'
import { styled, focusVisibleStyleBlock } from '@atom-learning/components'
import * as Icons from '@atom-learning/icons'
import theme from 'prism-react-renderer/themes/nightOwl'
import * as React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

type CodeBlockProps = {
  code?: string
  language?: string
  live?: boolean
  preview?: boolean
}

const StyledCode = styled('code', {
  display: 'block',
  fontSize: '$sm',
  lineHeight: 1.5,
  mx: '-$2',
  overflow: 'hidden',
  borderRadius: '$0',
  '&:focus-within': {
    ...focusVisibleStyleBlock()
  }
})

const StyledLivePreview = styled(LivePreview, {
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  overflow: 'visible',
  my: '$5',
  whiteSpace: 'initial'
})
const StyledLiveEditor = styled(LiveEditor)
const StyledLiveError = styled(LiveError, {
  color: '$danger',
  fontFamily: '"Inter"',
  fontSize: '$sm'
})

export const CodeBlock: React.FC<CodeBlockProps> = React.memo(
  ({ code, language, live, preview }) => {
    if (!code) return null

    const scope = { ...Icons, ...Components }

    const isEditorDisabled = !(live && preview)

    return (
      <LiveProvider
        code={code}
        scope={scope}
        theme={theme}
        language={language}
        disabled={isEditorDisabled}
      >
        {preview && (
          <>
            <StyledLivePreview />
            <StyledLiveError />
          </>
        )}
        <StyledCode>
          <StyledLiveEditor tabMode="focus" />
        </StyledCode>
      </LiveProvider>
    )
  }
)
CodeBlock.displayName = 'CodeBlock'
