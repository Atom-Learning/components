import { expect } from '@playwright/test'
import { baseTest as test } from '../fixtures'

test.describe('@visual Design System - Documentation Visual Regression', () => {
  test('Scenario: Visits all pages and takes snapshot', async ({
    visualSnapshot
  }) => {
    await visualSnapshot()
  })
})
