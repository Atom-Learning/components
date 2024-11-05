import { expect, test } from '@playwright/test'
import { argosScreenshot } from '@argos-ci/playwright'

import { waitForNetworkIdle } from '../utils/domUtils'

interface BaseTest {
  visualSnapshot: (snapshotName?: string) => Promise<void>
}

const DS_DOCUMENTATION_URL =
  process.env.DS_DOCUMENTATION_URL || 'http://localhost:3000'

export const baseTest = test.extend<BaseTest>({
  page: async ({ page }, use) => {
    await page.goto(DS_DOCUMENTATION_URL)
    await waitForNetworkIdle(page)
    await expect(
      page.getByRole('heading', { name: 'Atom Learning Design System' })
    ).toBeVisible()

    await use(page)
  },
  visualSnapshot: async ({ page }, use, testInfo) =>
    use(async (snapshotName: string = testInfo.title) => {
      await waitForNetworkIdle(page)
      await argosScreenshot(page, snapshotName, { animations: 'disabled' })
    })
})
