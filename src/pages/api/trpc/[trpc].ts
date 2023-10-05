import * as trpcNext from "@trpc/server/adapters/next";

import appRouter from "../../../server/routers/_app";

const main = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});

export default main;
