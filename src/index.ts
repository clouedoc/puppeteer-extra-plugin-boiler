/**
 * Export all public modules.
 */
export * from "./constants";
export * from "./exceptions";
export * from "./injected";
export * from "./injector";
export * from "./plugin";
export * from "./schemas";

/**
 * Export plugin factory as default export.
 */
import { BoilerPlugin } from "./plugin";

export default (): BoilerPlugin => new BoilerPlugin();
