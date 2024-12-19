import * as React from 'react'

import { Icon } from '~/components/icon'
import { styled } from '~/stitches'

import { Cancel, OkCircle, NotAllowed } from '@atom-learning/icons'

const StyledIcon = styled(Icon, {
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'translateX(50%) translateY(-50%)',
  color: '$feedbackIcon',
  bg: '$feedbackIconBackground',
  borderRadius: '$round',
  border: '1px solid $feedbackIconBackground'
})

const stateToIconMap = {
  incorrect: Cancel,
  correct: OkCircle,
  skipped: NotAllowed
}

export const AnswerFeedbackIcon = ({ state, ...rest }: Omit<React.ComponentProps<typeof Icon>, 'is'> & {
  state?: keyof typeof stateToIconMap
}) => {
  const iconSVG = state && stateToIconMap[state]
  if (!iconSVG) return null
  return (
    <StyledIcon
      role="img"
      aria-label={state}
      aria-hidden={false}
      is={iconSVG}
      {...rest}
    />
  )
}

AnswerFeedbackIcon.displayName = 'AnswerFeedbackIcon'
