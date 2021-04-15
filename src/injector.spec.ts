// this is an example Jest test.
// use these to ensure that your plugin is working as intended.

import { Browser, launch, Page } from "puppeteer";
import { InjectedBoiler } from "./injected";
import { inject } from "./injector";

let browser: Browser;
let page: Page;
beforeAll(async () => {
  browser = await launch({
    headless: true,
  });
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

jest.setTimeout(15000);

it("can inject the InjectBoiler class into the Page", async () => {
  const injected = inject(page);
  expect(injected).toHaveProperty("boiler");
  expect(injected.boiler).toBeInstanceOf(InjectedBoiler);
});
