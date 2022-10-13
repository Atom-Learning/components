import 'jest-axe/extend-expect'
import '@testing-library/jest-dom'
import './test/mocks/ResizeObserver'
import './test/mocks/DOMRect'
import './test/patches/cssom'

const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)
