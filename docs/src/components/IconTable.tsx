import { Box, CSS, Flex, Icon, SearchInput, Text } from '@components'
import * as Icons from '@atom-learning/icons'
import * as React from 'react'
import { debounce } from 'throttle-debounce'

const copyIcon = (str: string) => {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

const IconTableItem = ({ name, Component }) => (
  <Flex
    as="button"
    css={{
      alignItems: 'center',
      bg: 'white',
      border: '1px solid $tonal200',
      borderRadius: '$1',
      cursor: 'pointer',
      flex: '1 0 auto',
      flexDirection: 'column',
      justifyContent: 'center',
      p: '$5 $2',
      minWidth: 140,
      width: 'calc(100% / 5 - ($space$2 * 4))',
      position: 'relative',
      transition: 'all 75ms ease-out',
      '&:hover,&:focus': {
        borderColor: '$primary',
        boxShadow: 'inset 0 0 0 1px $colors$primary',
        '& svg': {
          transform: 'scale(1.5)'
        }
      },
      '&:focus': {
        outline: 'none'
      }
    }}
    onClick={() => copyIcon(name)}
    title="Click to copy"
  >
    <Icon
      is={Component}
      size="md"
      css={{ color: '$primary', transition: 'all 100ms ease-out', mb: '$4' }}
    />
    <Text size="sm" css={{ color: '$tonal400' }}>
      {name}
    </Text>
  </Flex>
)

type IconTableProps = {
  css: CSS
}

export const IconTable: React.FC<IconTableProps> = ({ css }) => {
  const [icons, setIcons] = React.useState(Icons)

  const handleSetIcons = React.useCallback(
    debounce(100, (val) => {
      if (val === '') {
        return setIcons(Icons)
      }

      const filteredIcons = Object.keys(Icons)
        .filter((key) => key.toLowerCase().includes(val.toLowerCase()))
        .reduce((obj, key) => {
          obj[key] = Icons[key]
          return obj
        }, {})

      setIcons(filteredIcons)
    }),
    [setIcons]
  )

  return (
    <Box css={{ pt: '$5' }}>
      <SearchInput
        size="md"
        name="icon-search"
        placeholder="Search for an icon"
        css={{
          maxWidth: 300,
          mx: 'auto',
          width: '100%'
        }}
        onChange={(e) => handleSetIcons(e.target.value)}
      />
      <Flex
        css={{
          flexWrap: 'wrap',
          gap: '$2',
          '@md': { mx: '-$sizes$5' },
          '@lg': { mx: 'calc(($sizes$6 + $sizes$0) * -1)' },
          ...(css as any)
        }}
      >
        {Object.keys(icons).length === 0 ? (
          <Flex
            css={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text css={{ color: '$tonal400' }}>No results</Text>
          </Flex>
        ) : (
          <>
            {Object.entries(icons).map(([key, value]) => (
              <IconTableItem key={key} name={key} Component={value} />
            ))}
            {/* Prevent last item filling the entire width */}
            {[0, 1, 2, 3].map((i) => (
              <Box
                key={i}
                css={{
                  flex: '1 0 auto',
                  height: 0,
                  minWidth: 140,
                  width: 'calc(100% / 5 - ($space$2 * 4))'
                }}
              />
            ))}
          </>
        )}
      </Flex>
    </Box>
  )
}
