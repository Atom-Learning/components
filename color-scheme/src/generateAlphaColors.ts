import { parseToRgba } from 'color2k'

const whiteRgba = [255, 255, 255, 1]
const alphaStep = [0.05, 0.1, 0.15, 0.2, 0.27, 0.35, 0.5, 0.7, 0.8, 0.95]
const keepWithinRgbaLimit = (arg: number): number =>
  Math.round(Math.max(Math.min(arg, 255), 0))

// (!) Attempt to match to match transparency matching initial colours over white. (Alpha compositing)
// (!) This function is CLOSE but does not produce exactly the expected colours. It might have to do with the alpha step.
export const generateAlphaColors = (
  colorName: string,
  colors: Record<string, string>
): Record<string, string> => {
  const colorsA = {}
  Object.entries(colors).forEach(([key, value], index) => {
    const [r1, g1, b1] = parseToRgba(value)
    const [r2, g2, b2] = whiteRgba
    const alphaRgbColor = [
      keepWithinRgbaLimit((r1 - r2) / alphaStep[index] + r2),
      keepWithinRgbaLimit((g1 - g2) / alphaStep[index] + g2),
      keepWithinRgbaLimit((b1 - b2) / alphaStep[index] + b2),
      alphaStep[index]
    ]

    colorsA[`${colorName}A${index + 1}`] = `rgba(${alphaRgbColor.join(',')})`
  })
  return colorsA
}
