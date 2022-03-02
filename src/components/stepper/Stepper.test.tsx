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

  it('only allows skipping to a certain step if the user has previously viewed it', () => {
    render(
      <Stepper allowSkip {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )
    // clear the onStepChange mock, because it's getting called with `0` when the component initializes
    jest.clearAllMocks()

    // after initialization, try to click the final step. onStepChange should not get called
    fireEvent.click(screen.getByText('3'))
    expect(props.onStepChange).not.toHaveBeenCalled()

    // navigate all the way to the last item using the `Next` button, then go back to the first item
    fireEvent.click(screen.getByText('Next'))
    fireEvent.click(screen.getByText('Next'))

    jest.clearAllMocks()
    fireEvent.click(screen.getByText('1'))
    expect(props.onStepChange).toHaveBeenCalledWith(0)

    // the user can now navigate freely by clicking the third step even while on the first one
    fireEvent.click(screen.getByText('3'))
    expect(props.onStepChange).toHaveBeenCalledWith(2)
  })

  it('calls final action handler if provided, when on final step', () => {
    render(
      <Stepper {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )

    fireEvent.click(screen.getByText('Next'))
    fireEvent.click(screen.getByText('Next'))
    expect(screen.getByText('Start')).toBeVisible()
    fireEvent.click(screen.getByText('Start'))
    expect(props.onComplete).toHaveBeenCalled()
  })

  it('calls the onStepChange handler when the activeStepChanges', () => {
    render(
      <Stepper {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )
    fireEvent.click(screen.getByText('Next'))
    expect(props.onStepChange).toHaveBeenCalledWith(1)
  })

  it("doesn't allow navigating out of the bullets range when no onComplete is passed", () => {
    render(
      <Stepper allowSkip stepCount={3} onStepChange={jest.fn()}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward label={() => 'Next'} />
      </Stepper>
    )
    fireEvent.click(screen.getByText('Next'))
    expect(screen.getByLabelText('step 2')).toHaveAttribute(
      'aria-current',
      'step'
    )

    fireEvent.click(screen.getByText('Next'))
    expect(screen.getByLabelText('step 3')).toHaveAttribute(
      'aria-current',
      'step'
    )

    fireEvent.click(screen.getByText('Next'))
    expect(screen.getByLabelText('step 3')).toHaveAttribute(
      'aria-current',
      'step'
    )
  })
})
