import { usersRouter } from "./routers/users";
import { router } from "./trpc";

export const appRouter = router({
  ...usersRouter,
});

export type AppRouter = typeof appRouter;
