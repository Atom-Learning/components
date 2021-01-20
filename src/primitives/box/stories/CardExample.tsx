import React from 'react'

import { Box } from '../../'

export const Card = () => (
  <Box
    as="section"
    css={{
      margin: 'auto',
      height: '300px',
      width: '250px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ebebeb',
      borderRadius: '8px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    }}
  >
    <Box
      as="header"
      css={{
        backgroundColor: '#ebebeb',
        height: '50px',
        marginBottom: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h2>Cats!</h2>
    </Box>
    <Box
      css={{
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'start'
      }}
    >
      <Box
        as="figure"
        css={{
          height: '100px',
          width: '200px',
          margin: 0
        }}
      >
        <img
          src="http://placekitten.com/200/100"
          alt="Cats having a nice time"
        />
        <figcaption>Some cats</figcaption>
      </Box>
    </Box>
    <Box as="footer" css={{ padding: '4px' }}>
      Remember: cats have whiskers!
    </Box>
  </Box>
)
