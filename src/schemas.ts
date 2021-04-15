// define your Zod schemas here.
// Zod schemas serve the purpose of validating and parsing data.

import { z } from "zod";

export const BoilerThingSchema = z.object({
  foo: z.string().refine((str) => str === "bar"),
});
