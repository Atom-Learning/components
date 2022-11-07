import { fireEvent, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Stepper } from './Stepper'

import { expectToThrow } from '../../../test/custom-assertions/expect-to-throw'
import { Step } from './types'

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

  it('allows overriding default forward event', () => {
    const onClickFn = jest.fn()
    render(
      <Stepper {...props}>
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward label={() => 'Next'} onClick={onClickFn} />
      </Stepper>
    )
    // clear the onStepChange mock, because it's getting called with `0` when the component initializes
    jest.clearAllMocks()
    fireEvent.click(screen.getByText('Next'))
    expect(props.onStepChange).not.toHaveBeenCalled()
    expect(onClickFn).toHaveBeenCalled()
  })

  it('renders correctly with default direction changed', () => {
    const { container } = render(
      <Stepper allowSkip {...props} direction="vertical">
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )

    expect(container).toMatchSnapshot()
  })

  it('renders the correct number of bullets when used as a controlled component', () => {
    const steps: Step[] = [
      { label: 'Step 1', status: 'active' },
      { label: 'Step 2', status: 'default' }
    ]

    render(
      <Stepper steps={steps}>
        <Stepper.Steps />
      </Stepper>
    )

    const expectedSteps = screen.getAllByLabelText('step', { exact: false })

    expect(expectedSteps).toHaveLength(steps.length)
  })

  it('does not call the onStepChange handler when used as a controlled component', () => {
    const onStepChange = jest.fn()

    render(
      <Stepper
        onStepChange={onStepChange}
        steps={[
          {
            label: 'Step 1',
            status: 'active'
          },
          {
            label: 'Step 2',
            status: 'default'
          }
        ]}
      >
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )
    fireEvent.click(screen.getByText('Next'))
    // clicking on Next doesn't do anything, since steps prop is passed
    expect(onStepChange).toHaveBeenCalledTimes(0)
  })

  it('renders success icon for bullets when step is completed', () => {
    const { container } = render(
      <Stepper
        steps={[
          {
            label: 'Step 1',
            status: 'success'
          },
          {
            label: 'Step 2',
            status: 'active'
          }
        ]}
      >
        <Stepper.StepBack label={() => 'Back'} />
        <Stepper.Steps />
        <Stepper.StepForward
          label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
        />
      </Stepper>
    )
    expect(container).toMatchSnapshot()
  })

  it('throws when both stepCount and steps props are provided', async () => {
    expectToThrow(() =>
      render(
        <Stepper
          steps={[
            {
              label: 'Step 1',
              status: 'success'
            },
            {
              label: 'Step 2',
              status: 'active'
            }
          ]}
          stepCount={3}
        >
          <Stepper.StepBack label={() => 'Back'} />
          <Stepper.Steps />
          <Stepper.StepForward
            label={(activeStep) => (activeStep === 2 ? 'Start' : 'Next')}
          />
        </Stepper>
      )
    )
  })

  it("doesn't render labels when hideLabels prop is truthy", () => {
    const steps: Step[] = [
      { label: 'Step 1', status: 'active' },
      { label: 'Step 2', status: 'default' }
    ]

    render(
      <Stepper steps={steps} hideLabels={true}>
        <Stepper.Steps />
      </Stepper>
    )

    const expectedSteps = screen.queryAllByLabelText('step', { exact: false })
    expect(expectedSteps).toHaveLength(0)
  })

  it('replaces completed step numbers with icons when prop passed in', () => {
    const steps: Step[] = [
      { label: 'Step 1', status: 'completed' },
      { label: 'Step 2', status: 'active' },
      { label: 'Step 3', status: 'default' }
    ]

    render(
      <Stepper steps={steps} showCompletedIcons>
        <Stepper.Steps />
      </Stepper>
    )

    expect(screen.queryByText('1')).not.toBeInTheDocument()
    expect(screen.getByText('2')).toBeVisible()
  })
})
