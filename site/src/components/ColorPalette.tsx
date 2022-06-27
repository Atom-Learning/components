import { Box, Flex, Text } from '@atom-learning/components'
import { capitalCase } from 'capital-case'
import { hsl, parseToHsl } from 'polished'
import * as React from 'react'

type ColorPaletteProps = {
  colors: Record<string, string>
}

const transformPalette = (colors) => {
  const palette = {}

  Object.entries(colors).forEach(([key, value]) => {
    const name = capitalCase(key, {
      splitRegexp: /([a-z])([A-Z0-9])/g
    }).split(' ')[0]
    if (palette[name]) palette[name][key] = value
    else palette[name] = { [key]: value }
  })

  return palette
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  ...props
}) => (
  <Flex css={{ flexDirection: 'column', flexWrap: 'wrap' }} {...props}>
    {Object.entries(transformPalette(colors)).map(([key, value]) => (
      <Flex
        css={{
          flexDirection: 'column',
          flexWrap: 'wrap',
          py: '$5',
          gap: '$3',
          '&:not(:last-child)': { borderBottom: '1px solid $tonal100' }
        }}
        key={key}
      >
        {Object.entries(value).map(([key, value]) => {
          const color = parseToHsl(value)
          // @ts-ignore
          const hasAlpha = color?.alpha
          return (
            <Flex key={key} css={{ alignItems: 'center' }}>
              <Box
                css={{ borderRadius: '$round', bg: `$${key}`, size: '$6' }}
              />
              <Flex css={{ pl: '$3', flexDirection: 'column' }}>
                <Text css={{ fontWeight: 600, mb: '$3' }}>{`$${key}`}</Text>
                <Text
                  size="sm"
                  css={{ color: '$tonal400', mb: !hasAlpha ? '$3' : 0 }}
                >
                  {value}
                </Text>
                {!hasAlpha && (
                  <Text size="sm" css={{ color: '$tonal400' }}>
                    {hsl(color)}
                  </Text>
                )}
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    ))}
  </Flex>
)
