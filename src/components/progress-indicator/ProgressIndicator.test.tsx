import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { ProgressIndicatorProvider } from '.'
import { ProgressIndicator } from './ProgressIndicator'

it('renders a bullet style progress indicator - has no programmatically detectable a11y issues', async () => {
  const { container } = render(
    <ProgressIndicatorProvider stepsData={[1, 2, 3]}>
      <ProgressIndicator handleFinal={jest.fn()} />
    </ProgressIndicatorProvider>
  )

  expect(await axe(container)).toHaveNoViolations()
})

it('allows skipping steps', async () => {
  render(
    <ProgressIndicatorProvider stepsData={[1, 2, 3]} allowSkip>
      <ProgressIndicator handleFinal={jest.fn()} />
    </ProgressIndicatorProvider>
  )

  fireEvent.click(screen.getByText(3))
  // clicking on the last item switches the "Next" button text to "Start"
  expect(screen.getByText('Start')).toBeVisible()
})

it("doesn't allow skipping steps", async () => {
  render(
    <ProgressIndicatorProvider stepsData={[1, 2, 3]}>
      <ProgressIndicator handleFinal={jest.fn()} />
    </ProgressIndicatorProvider>
  )

  fireEvent.click(screen.getByText(3))
  // clicking on the last item switches doesn't do anything, since `allowSkip` isn't passed as a prop
  expect(screen.getByText('Next')).toBeVisible()
})

it('allows going backwards', async () => {
  render(
    <ProgressIndicatorProvider stepsData={[1, 2, 3]}>
      <ProgressIndicator handleFinal={jest.fn()} />
    </ProgressIndicatorProvider>
  )
  // go to the second item
  fireEvent.click(screen.getByText('Next'))
  // go back to the first item
  fireEvent.click(screen.getByText('Back'))
  // back button should now be disabled
  expect(screen.getByText('Back')).toBeDisabled()
})
