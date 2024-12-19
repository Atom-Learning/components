import { baseTest as test } from '../fixtures'
import { prepareURL } from '../utils/urlUtils'

test.describe('@visual Design System - Documentation Visual Regression', () => {
  test('Scenario: Visits all links and takes snapshot', async ({
    homePage,
    page,
    visualSnapshot
  }) => {
    // Take screenshot of home page
    await visualSnapshot()

    // Get all links in the side navbar
    const links = await homePage.getAllLinks()

    // Iterate of the links
    for (const { href, label } of links) {
      // Visit each link
      console.log(`Visiting ${label}`)
      await page.goto(prepareURL(href))

      // Check if a page has tabs
      const tabs = await homePage.getAllTabs()
      // If tabs are present, iterate over them and take screenshot
      if (tabs.length > 0) {
        for (const tab of tabs) {
          await homePage.showTab(tab)
          await visualSnapshot(
            `[Visual Snapshot - ${label}] [Link - ${href}] [Tab - ${tab}]`
          )
        }
      }
      // If tabs are not present, take screenshot and move on
      else {
        await visualSnapshot(`[Visual Snapshot - ${label}] [Link - ${href}]`)
      }
    }
  })
})
