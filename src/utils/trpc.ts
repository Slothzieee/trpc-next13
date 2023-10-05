import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

import type { AppRouter } from "../server/routers/_app";

const trpc = createTRPCNext<AppRouter>({
  config: (info) => ({
    links: [
      httpBatchLink({
        url: `http://localhost:3000/api/trpc`,
      }),
    ],
  }),
  ssr: false,
});

export default trpc;
