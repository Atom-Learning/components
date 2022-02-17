import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Stepper } from './Stepper'

describe('Stepper', () => {
  let props
  beforeEach(() => {
    props = {
      stepCount: 3,
      onComplete: jest.fn(),
      onStepChange: jest.fn()
    }
  })

  it('renders a bullet style progress indicator - has no programmatically detectable a11y issues', async () => {
    const { container } = render(
      <Stepper {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders the correct number of bullets', () => {
    const { container } = render(
      <Stepper allowSkip {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )
    expect(container).toMatchSnapshot()
  })

  it('allows skipping steps', () => {
    render(
      <Stepper allowSkip {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )

    fireEvent.click(screen.getByText(3))
    // clicking on the last item switches the "Next" button text to "Start"
    expect(screen.getByText('Start')).toBeVisible()
  })

  it("doesn't allow skipping steps", async () => {
    render(
      <Stepper {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )

    fireEvent.click(screen.getByText(3))
    // clicking on the last item switches doesn't do anything, since `allowSkip` isn't passed as a prop
    expect(screen.getByText('Next')).toBeVisible()
  })

  it('allows going backwards', async () => {
    render(
      <Stepper {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )
    // go to the second item
    fireEvent.click(screen.getByText('Next'))
    // go back to the first item
    fireEvent.click(screen.getByText('Back'))
    // back button should now be disabled
    expect(screen.getByText('Back')).toBeDisabled()
  })

  it('calls final action handler if provided, when on final step', () => {
    render(
      <Stepper allowSkip {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )

    fireEvent.click(screen.getByText('3'))
    expect(screen.getByText('Start')).toBeVisible()
    fireEvent.click(screen.getByText('Start'))
    expect(props.onComplete).toHaveBeenCalled()
  })

  it('calls the onStepChange handler when the activeStepChanges', () => {
    render(
      <Stepper allowSkip {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )
    fireEvent.click(screen.getByText('3'))
    expect(props.onStepChange).toHaveBeenCalledWith(2)
  })
})
