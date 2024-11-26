import { Page } from '@playwright/test'

export const waitForNetworkIdle = async (
  page: Page,
  timeout: number = 10000
) => {
  try {
    // eslint-disable-next-line playwright/no-networkidle
    await page.waitForLoadState('networkidle', { timeout })
  } catch (error) {
    // Do nothing
  }
}
