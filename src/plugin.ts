import { Page } from "puppeteer";
import { PuppeteerExtraPlugin } from "puppeteer-extra-plugin";
import { PLUGIN_NAME } from "./constants";
import { inject } from "./injector";
import { BoilerPluginOptions } from "./types";

/**
 * Puppeteer Extra Boilerplate Plugin
 */
export class BoilerPlugin extends PuppeteerExtraPlugin {
  /**
   * Constructor
   * Receives standard puppeteer-extra plugin config options.
   */
  public constructor(opts: BoilerPluginOptions = {}) {
    super(opts);
  }

  /**
   * Describe the identifier for plugin.
   */
  public get name(): string {
    return PLUGIN_NAME;
  }

  public async onPageCreated(page: Page): Promise<void> {
    inject(page);
  }
}

/**
 * Export plugin factory as default export.
 */
export default (): BoilerPlugin => new BoilerPlugin();
