import { render } from '@testing-library/react'
import * as React from 'react'

import { Stack } from '.'

import { isFlexGapSupported } from './utilities'

// const isFlexGapSupported = jest.fn().mockImplementation(() => false)

// jest.mock('./utilities', () => ({ isFlexGapSupported }))

jest.mock('./utilities', () => ({
  ...jest.requireActual('./utilities'),
  isFlexGapSupported: jest.fn(),
}));

describe('Stack component', () => {
  // beforeEach(() => {
  //   isFlexGapSupported.mockReset()
  // })

  it('renders legacy version by default', async () => {
    const { container } = render(
      <Stack>
        <div />
        <div />
        <div />
      </Stack>
    )

    expect(container).toMatchSnapshot()
  })

  it.only('renders modern version when supported', async () => {
    isFlexGapSupported.mockReturnValue(true)

    const { container } = render(
      <Stack>
        <div />
        <div />
        <div />
      </Stack>
    )

    expect(container).toMatchSnapshot()
  })
})
