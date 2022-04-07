import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { FileInput } from '.'
import { FileInputProps } from './FileInput'

describe('FileInput component', () => {
  const props: FileInputProps = {
    onSelect: jest.fn(),
    id: 'file-input-id',
    label: 'Select file'
  }

  it('renders', async () => {
    const { container } = render(<FileInput {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<FileInput {...props} />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('uploads a file', async () => {
    const file = new File(['random content'], 'upload.txt')
    render(<FileInput {...props} />)

    const input = screen.getByTestId('file-upload') as HTMLInputElement

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] }
      })
    )

    expect(input.files[0].name).toBe('upload.txt')
    expect(input.files.length).toBe(1)
  })
})
