import { Prisma } from "@/lib/prisma";
import { publicProcedure } from "../trpc";

export const usersRouter = {
  getAllUsersSecure: publicProcedure.mutation(async () => {
    const users = await Prisma.getAllUsersSecure();

    return { users };
  }),
};
