import { Page as VanillaPage } from "puppeteer";
import { InjectedBoiler } from "./injected";

export interface BoilerPage extends VanillaPage {
  readonly boiler: InjectedBoiler;
}

/**
 * Inject a new InjectedBoiler instance into a Puppeteer page.
 * Makes self available on the `boiler` property.
 */
export function inject(page: VanillaPage): BoilerPage {
  return Object.defineProperty(page, "boiler", {
    value: new InjectedBoiler(page),
    writable: false,
  });
}
