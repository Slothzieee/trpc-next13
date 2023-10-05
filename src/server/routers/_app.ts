import { z as zod } from "zod";
import { procedure, router } from "../trpc";

const appRouter = router({
  hello: procedure
    .input(zod.object({ text: zod.string() }))
    .query((options) => ({ greeting: `Hello ${options.input.text}` })),
});

export default appRouter;

export type AppRouter = typeof appRouter;
