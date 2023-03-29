import {
  Image,
  Text,
  Grid,
  Box,
  Heading
} from '@atom-learning/components'
import * as React from 'react'

type TDosAndDontsItemProps = { image: string, type: 'do' | 'avoid' | 'dont', description: string }

const DosAndDontsItem: React.FC<TDosAndDontsItemProps> = ({ image, type, description }) => {
  const typeBorderColor = type === 'do' ? '$success' : type === 'dont' ? '$danger' : '$warning'
  const typeText = type === 'do' ? 'Do' : type === 'dont' ? "Don't" : 'Avoid'
  return (
    <Box as="li" css={{ listStyle: 'none' }}>
      <Box css={{
        background: '$base1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '4px solid',
        borderColor: typeBorderColor,
        mb: '$2',
        p: '$2',
        aspectRatio: "16/9",
      }}>
        {image && <Image src={image} alt="" css={{ maxHeight: '100%' }} />}
      </Box>
      <Heading as="h3" size="xs" css={{ mb: '$3' }}>{typeText}</Heading>
      <Text>{description}</Text>
    </Box >
  )
}

type DosAndDontsProps = {
  items: TDosAndDontsItemProps[]
}

export const DosAndDonts: React.FC<DosAndDontsProps> = ({ items }) => {

  return (
    <Grid
      as="ul"
      css={{
        p: 0,
        m: 0,
        gap: '$5 $4',
        gridTemplateColumns: '1fr',
        '@sm': { gridTemplateColumns: '1fr 1fr' },
      }}>
      {items.map((props) => <DosAndDontsItem key={props.description} {...props} />)}
    </Grid>
  )
}
