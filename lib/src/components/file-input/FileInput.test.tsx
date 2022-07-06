import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'
import { vi } from 'vitest'

import { FileInput } from '.'
import { FileInputProps } from './FileInput'

describe('FileInput component', () => {
  const props: FileInputProps = {
    onFileSelect: vi.fn()
  }

  it('renders', async () => {
    const { container } = render(<FileInput {...props}>Upload</FileInput>)

    expect(container).toMatchSnapshot()
  })

  it('has no programmatically detectable a11y issues', async () => {
    const { container } = render(<FileInput {...props}>Upload</FileInput>)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('uploads a file', async () => {
    const testFile = new File(['random content'], 'upload.txt')
    render(<FileInput {...props}>Upload</FileInput>)

    const input = screen.getByLabelText('Upload') as HTMLInputElement

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [testFile] }
      })
    )

    expect(input.files[0].name).toBe('upload.txt')
    expect(input.files.length).toBe(1)
  })

  it('uploads multiple file', async () => {
    const testFile = new File(['random content'], 'upload.txt')
    const testFile2 = new File(['random content'], 'upload2.txt')
    render(
      <FileInput {...props} multiple>
        Upload
      </FileInput>
    )

    const input = screen.getByLabelText('Upload') as HTMLInputElement

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [testFile, testFile2] }
      })
    )

    expect(input.files[0].name).toBe('upload.txt')
    expect(input.files[1].name).toBe('upload2.txt')
    expect(input.files.length).toBe(2)
  })
})
