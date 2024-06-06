import { render, screen } from '@testing-library/react'
import React from 'react'

import { Link } from '~/components/link/Link'

import { RouterProvider, useRouter } from '.'

const TestComponent = ({ href }: { href: string }) => {
  const { RouterLink } = useRouter({ href })
  return <RouterLink href={href}>Link</RouterLink>
}

describe('RouterProvider', () => {
  it('should provide a custom Link component', () => {
    const CustomLink = (props: any) => (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a data-testid="custom-link" {...props} />
    )
    render(
      <RouterProvider Link={CustomLink}>
        <Link href="/hello">Child</Link>
      </RouterProvider>
    )
    expect(screen.getByTestId('custom-link')).toBeInTheDocument()
  })
})

describe('useRouter', () => {
  it('should return "a" for external URLs', () => {
    const { rerender } = render(
      <RouterProvider Link={() => <p />}>
        <TestComponent href="http://example.com" />
      </RouterProvider>
    )
    expect(screen.getByRole('link')).toHaveTextContent('Link')

    rerender(
      <RouterProvider Link={() => <p />}>
        <TestComponent href="https://example.com" />
      </RouterProvider>
    )
    expect(screen.getByRole('link')).toHaveTextContent('Link')
  })

  it('should return "a" for mailto URLs', () => {
    render(
      <RouterProvider Link={() => <p />}>
        <TestComponent href="mailto:test@example.com" />
      </RouterProvider>
    )
    expect(screen.getByRole('link')).toHaveTextContent('Link')
  })

  it('should return "a" for tel URLs', () => {
    render(
      <RouterProvider Link={() => <p />}>
        <TestComponent href="tel:123456789" />
      </RouterProvider>
    )
    expect(screen.getByRole('link')).toHaveTextContent('Link')
  })

  it('should return custom Link for internal URLs', () => {
    render(
      <RouterProvider
        Link={(props: any) => <p data-testid="custom" {...props} />}
      >
        <TestComponent href="/internal" />
      </RouterProvider>
    )
    expect(screen.getByText('Link')).toHaveAttribute('data-testid', 'custom')
  })
})
