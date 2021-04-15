// Define your errors here.

export class BoilerError extends Error {
  constructor(public readonly interestingMetadata: string) {
    super("This is a demo error :)");
  }
}
