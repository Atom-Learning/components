import * as React from 'react'

import { Loader } from '../loader'

export const DataTableLoading: React.FC = () => (
  <Loader
    css={{
      position: 'absolute',
      marginBottom: '$4',
      left: '50%',
      transform: 'translate(-50%, 0)',
      bottom: '$9',
      zIndex: 1
    }}
  />
)
