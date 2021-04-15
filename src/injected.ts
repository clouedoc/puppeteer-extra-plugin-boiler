import { Page } from "puppeteer";

/**
 * A demo class that will be injected into `page.boiler`.
 *
 * @example
 *
 * ```ts
 * const url = await page.boiler.foo();
 * ```
 */
export class InjectedBoiler {
  constructor(public readonly page: Page) {}

  /**
   * Demo inject function.
   * @returns the current url of the page
   */
  foo(): string {
    return this.page.url();
  }
}
