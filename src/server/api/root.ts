// import { postRouter } from "~/server/api/routers/post";
import { cardRouter } from "~/server/api/routers/card";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // post: postRouter,
  card: cardRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
