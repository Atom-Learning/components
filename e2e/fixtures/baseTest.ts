import { expect, test } from '@playwright/test'
import { argosScreenshot } from '@argos-ci/playwright'

import { waitForNetworkIdle } from '../utils/domUtils'
import { HomePage } from '../pom/HomePage'
import { DS_DOCUMENTATION_URL } from '../constants'

interface BaseTest {
  homePage: HomePage
  visualSnapshot: (snapshotName?: string) => Promise<void>
}

export const baseTest = test.extend<BaseTest>({
  homePage: async ({ page }, use) => {
    await page.goto(DS_DOCUMENTATION_URL)
    await waitForNetworkIdle(page)
    await expect(
      page.getByRole('heading', { name: 'Atom Learning Design System' })
    ).toBeVisible()

    const homePage = new HomePage(page)

    await use(homePage)
  },
  visualSnapshot: async ({ page }, use, testInfo) =>
    use(async (snapshotName: string = testInfo.title) => {
      await waitForNetworkIdle(page)
      await argosScreenshot(page, snapshotName, { animations: 'disabled' })
    })
})
