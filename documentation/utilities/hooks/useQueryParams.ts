import { useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { debounce } from 'throttle-debounce'

const configurableDebounce = (ticks: number, cb: () => unknown) =>
  ticks ? debounce(ticks, cb) : cb
export const useQueryParams = <T>() => {
  const router = useRouter()
  const routerRef = useRef<typeof router>()
  routerRef.current = router; // (! Hack) router updates on *every* push/replace which leads to infinite loops; switching to a ref means it doesn't have to be a hook dependency

  const { slug: _slug, ...queryParams } = router.query

  const getQueryParam = useCallback((key: keyof T) => queryParams[String(key)], [queryParams])

  // Keep up-to-date copy of browser's queryParams internally
  const queryParamsInternal = useRef({})
  useEffect(() => {
    queryParamsInternal.current = queryParams
  }, [queryParams])

  const debouncedUpdateQueryParams = useRef<() => unknown>()
  const updateQueryParams = useCallback(
    (
      newSearchParams,
      { method: updateMethod = 'push', debounce: debounceTicks = 500, shallow = true } = {}
    ) => {
      if (!routerRef.current) return;
      const { slug } = routerRef.current.query

      // Store requested changes internally regardless of actually updating the URL
      // So we don't lose changes from cancelling debounced updates
      queryParamsInternal.current = { ...queryParamsInternal.current, ...newSearchParams }

      // Cancel previous debounce: Run the update on the URL only once!
      // @ts-expect-error:  We need to type `debouncedUpdateQueryParams` as `debounce` to access `cancel` method
      debouncedUpdateQueryParams.current?.cancel?.()
      debouncedUpdateQueryParams.current = configurableDebounce(debounceTicks, () => {
        routerRef.current[updateMethod]({
          pathname: `${Array.isArray(slug) ? slug.join('/') : slug}`,
          query: queryParamsInternal.current
        }, undefined, { shallow })
      })
      debouncedUpdateQueryParams.current?.()
    },
    []
  )

  return {
    queryParams,
    getQueryParam,
    updateQueryParams
  }
}
