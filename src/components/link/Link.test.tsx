import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import { Heading } from '../heading/Heading'
import { Text } from '../text/Text'
import { Link } from './'

describe(`Link component`, () => {
  it('renders an anchor', async () => {
    const { container } = render(<Link href="https://google.com/">GOOGLE</Link>)

    const link = await screen.getByText('GOOGLE')

    expect(link).toHaveAttribute('href', 'https://google.com/')
    expect(link).toHaveTextContent('GOOGLE')
    expect(container).toMatchSnapshot()
  })

  it('renders an anchor - has no programmatically detectable a11y issues', async () => {
    const { container } = render(<Link href="https://google.com/">GOOGLE</Link>)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders an large anchor', async () => {
    const { container } = render(
      <Link href="https://google.com/" size="lg">
        GOOGLE
      </Link>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders an large anchor - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Link href="https://google.com/" size="lg">
        GOOGLE
      </Link>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('is polymorphic', async () => {
    render(<Link as="button">See more</Link>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('can be nested within Text and Heading', async () => {
    render(
      <>
        <Text>
          <Link>TEXT LINK</Link>
        </Text>
        <Heading>
          <Link>HEADING LINK</Link>
        </Heading>
      </>
    )

    expect(screen.getByText('TEXT LINK')).toHaveStyle('font-size: 100%')
    expect(screen.getByText('HEADING LINK')).toHaveStyle('font-size: 100%')
  })
})
