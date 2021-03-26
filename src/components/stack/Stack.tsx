import { styled, theme } from '~/stitches'

const child = '> *'
const childWithGap = '> * + *'

const gap = Object.values(theme.space).reduce(
  (acc, { token }) => ({
    ...acc,
    [token]: {
      [childWithGap]: { $$stackGap: `$space$${token}` }
    }
  }),
  {}
)

export const Stack = styled('div', {
  display: 'flex',
  [child]: {
    margin: 0
  },
  [childWithGap]: {
    $$stackGapLeft: 'initial',
    $$stackGapRight: 'initial',
    $$stackGapTop: 'initial',
    marginLeft: '$$stackGapLeft',
    marginTop: '$$stackGapTop',
    marginRight: '$$stackGapRight'
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        [childWithGap]: {
          $$stackGapLeft: '$$stackGap'
        }
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        [childWithGap]: {
          $$stackGapRight: '$$stackGap'
        }
      },
      column: {
        flexDirection: 'column',
        [childWithGap]: {
          $$stackGapTop: '$$stackGap'
        }
      }
    },
    gap
  },
  defaultVariants: {
    gap: 2,
    direction: 'row'
  }
})

Stack.displayName = 'Stack'
