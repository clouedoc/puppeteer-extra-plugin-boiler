/* eslint-disable */
import {} from "puppeteer";
import {} from "puppeteer-core";
import { PluginOptions } from "puppeteer-extra-plugin";
import { InjectedBoiler } from "./injected";

export interface BoilerPluginOptions extends PluginOptions {}

// type definitions for TypeScripters to access the injected class.

export type BoilerPluginPageAdditions = {
  boiler: InjectedBoiler;
};

declare module "puppeteer" {
  interface Page extends BoilerPluginPageAdditions {}
}

declare module "puppeteer-core" {
  interface Page extends BoilerPluginPageAdditions {}
}
