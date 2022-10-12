import * as React from 'react'
import { Button, Link } from '../../components'
import { passPropsToChildren } from './'
import { render, screen } from '@testing-library/react'

const Component = ({ children }) => (
  <>{passPropsToChildren(children, { href: 'https://www.bing.com' }, [Link])}</>
)

describe('passPropsToChildren', () => {
  it('passes a prop to a child', () => {
    render(
      <Component>
        <Link>Search</Link>
      </Component>
    )

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.bing.com'
    )
  })

  it('does not pass a prop to a child if the child already has a prop with that name', () => {
    render(
      <Component>
        <Link href="https://www.google.com">Search</Link>
      </Component>
    )

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.google.com'
    )
  })

  it('does not pass a prop to a child if the child is not in the list of allowed component types', () => {
    render(
      <Component>
        <Button>Search</Button>
      </Component>
    )

    expect(screen.getByRole('button')).not.toHaveAttribute(
      'href',
      'https://www.bing.com'
    )
  })
})
