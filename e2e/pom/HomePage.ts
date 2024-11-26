import { Locator, Page } from '@playwright/test'

export class HomePage {
  public nav: Locator
  public menu: Locator
  public tabList: Locator

  constructor(public readonly page: Page) {
    this.nav = page.getByRole('navigation', { name: 'Main' })
    this.menu = this.nav.getByRole('list')
    this.tabList = page.getByRole('tablist').first()
  }

  async getAllLinks() {
    const anchorElements = await this.menu
      .getByRole('listitem')
      .getByRole('link')
      .all()

    const links: Array<{ href: string; label: string }> = []

    for (const anchorElement of anchorElements) {
      const href = await anchorElement.getAttribute('href')
      const label = await anchorElement.innerText()

      if (href) {
        links.push({
          href,
          label
        })
      }
    }

    return links
  }

  async getAllTabs() {
    const tabs = await this.tabList.getByRole('tab').all()
    return Promise.all(tabs.map((tab) => tab.innerText()))
  }

  async showTab(tabName: string) {
    const tab = this.tabList.getByRole('tab', { name: tabName })

    if (await tab.isEnabled()) {
      await tab.click()
    }
  }
}
