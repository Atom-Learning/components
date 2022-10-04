import { createThemeVariants } from './'

describe('createThemeVariants', () => {
  it('returns the correct CSS object', () => {
    const result = createThemeVariants('space', { p: '$key' })

    expect(result).toStrictEqual({
      0: { p: '$space$0' },
      1: { p: '$space$1' },
      2: { p: '$space$2' },
      3: { p: '$space$3' },
      4: { p: '$space$4' },
      5: { p: '$space$5' },
      6: { p: '$space$6' },
      7: { p: '$space$7' },
      8: { p: '$space$8' },
      9: { p: '$space$9' }
    })
  })
})
