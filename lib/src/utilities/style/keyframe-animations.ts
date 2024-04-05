import { keyframes } from '~/stitches'

export const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})
export const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})
export const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})
export const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

export const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})
export const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

export const slideInOut = ({
  outPosition = { x: 0, y: 0 },
  inPosition = { x: 0, y: 0 }
}: {
  outPosition?: { x: string | number; y: string | number }
  inPosition?: { x: string | number; y: string | number }
}): {
  in: ReturnType<typeof keyframes>
  out: ReturnType<typeof keyframes>
} => {
  const slideIn = keyframes({
    '0%': {
      transform: `translateX(${outPosition.x}) translateY(${outPosition.y})`
    },
    '100%': {
      transform: `translateX(${inPosition.x}) translateY(${inPosition.y})`
    }
  })

  const slideOut = keyframes({
    '0%': {
      transform: `translateX(${inPosition.x}) translateY(${inPosition.y})`
    },
    '100%': {
      transform: `translateX(${outPosition.x}) translateY(${outPosition.y})`
    }
  })

  return {
    in: slideIn,
    out: slideOut
  }
}
