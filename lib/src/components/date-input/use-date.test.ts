import { act, renderHook } from '@testing-library/react-hooks'

import { useDate } from './use-date'

describe('useDate', () => {
  it('sets the correct date', async () => {
    const { result, waitFor } = renderHook(() => useDate(new Date('11/11/20')))

    await waitFor(() => {
      expect(result.current.dateString).toEqual('11/11/2020')
      expect(result.current.date).toEqual(new Date('11/11/20'))

      act(() => {
        result.current.setDate('09/09/2021', true)
      })

      expect(result.current.dateString).toEqual('09/09/2021')
      expect(result.current.date).toEqual(new Date('09/09/2021'))
    })
  })

  it('parses dates correctly', async () => {
    const { result, waitFor } = renderHook(() =>
      useDate(new Date('04/02/20'), 'MM/DD/YY')
    )

    await waitFor(() => {
      expect(new Date(result.current.date).getMonth()).toEqual(3)

      act(() => {
        result.current.setDate('02/04/20', true)
      })

      expect(new Date(result.current.date).getMonth()).toEqual(1)
    })
  })

  it('formats dates correctly', async () => {
    const { result, waitFor } = renderHook(() =>
      useDate(new Date('04/02/20'), 'MM/DD/YY')
    )

    await waitFor(() => {
      act(() => {
        result.current.setDate(new Date('3 July 2020'), false)
      })

      expect(result.current.dateString).toEqual('07/03/20')
    })
  })
})
