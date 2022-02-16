import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { ProgressIndicator } from './ProgressIndicator'

describe('ProgressIndicator', () => {
  it('renders a bullet style progress indicator - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <ProgressIndicator stepCount={3} onComplete={jest.fn()}>
        <ProgressIndicator.NavigatePrevious outputLabel="Back" />
        <ProgressIndicator.Steps />
        <ProgressIndicator.NavigateNext
          outputLabel={(isFinalStep) => (isFinalStep ? 'Start' : 'Next')}
        />
      </ProgressIndicator>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the correct number of bullets', () => {
    const { container } = render(
      <ProgressIndicator stepCount={3} allowSkip onComplete={jest.fn()}>
        <ProgressIndicator.NavigatePrevious outputLabel="Back" />
        <ProgressIndicator.Steps />
        <ProgressIndicator.NavigateNext
          outputLabel={(isFinalStep) => (isFinalStep ? 'Start' : 'Next')}
        />
      </ProgressIndicator>
    )
    expect(container).toMatchSnapshot()
  })

  it('allows skipping steps', () => {
    render(
      <ProgressIndicator stepCount={3} allowSkip onComplete={jest.fn()}>
        <ProgressIndicator.NavigatePrevious outputLabel="Back" />
        <ProgressIndicator.Steps />
        <ProgressIndicator.NavigateNext
          outputLabel={(isFinalStep) => (isFinalStep ? 'Start' : 'Next')}
        />
      </ProgressIndicator>
    )

    fireEvent.click(screen.getByText(3))
    // clicking on the last item switches the "Next" button text to "Start"
    expect(screen.getByText('Start')).toBeVisible()
  })

  it("doesn't allow skipping steps", async () => {
    render(
      <ProgressIndicator stepCount={3} onComplete={jest.fn()}>
        <ProgressIndicator.NavigatePrevious outputLabel="Back" />
        <ProgressIndicator.Steps />
        <ProgressIndicator.NavigateNext
          outputLabel={(isFinalStep) => (isFinalStep ? 'Start' : 'Next')}
        />
      </ProgressIndicator>
    )

    fireEvent.click(screen.getByText(3))
    // clicking on the last item switches doesn't do anything, since `allowSkip` isn't passed as a prop
    expect(screen.getByText('Next')).toBeVisible()
  })

  it('allows going backwards', async () => {
    render(
      <ProgressIndicator stepCount={3} onComplete={jest.fn()}>
        <ProgressIndicator.NavigatePrevious outputLabel="Back" />
        <ProgressIndicator.Steps />
        <ProgressIndicator.NavigateNext
          outputLabel={(isFinalStep) => (isFinalStep ? 'Start' : 'Next')}
        />
      </ProgressIndicator>
    )
    // go to the second item
    fireEvent.click(screen.getByText('Next'))
    // go back to the first item
    fireEvent.click(screen.getByText('Back'))
    // back button should now be disabled
    expect(screen.getByText('Back')).toBeDisabled()
  })

  it('calls final action handler if provided, when on final step', () => {
    const finalActionSpy = jest.fn()
    render(
      <ProgressIndicator stepCount={3} allowSkip onComplete={finalActionSpy}>
        <ProgressIndicator.NavigatePrevious outputLabel="Back" />
        <ProgressIndicator.Steps />
        <ProgressIndicator.NavigateNext
          outputLabel={(isFinalStep) => (isFinalStep ? 'Start' : 'Next')}
        />
      </ProgressIndicator>
    )

    fireEvent.click(screen.getByText('3'))
    expect(screen.getByText('Start')).toBeVisible()
    fireEvent.click(screen.getByText('Start'))
    expect(finalActionSpy).toHaveBeenCalled()
  })
})
