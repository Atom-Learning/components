export interface ResizeObserver {
  observe: () => void
  unobserve: () => void
  disconnect: () => void
}

export default ResizeObserver
