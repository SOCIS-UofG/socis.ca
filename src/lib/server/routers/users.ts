import { Prisma } from "@/lib/prisma";
import { publicProcedure } from "../trpc";
import { type User } from "next-auth";

export const usersRouter = {
  getAllUsersSecure: publicProcedure.mutation(async () => {
    const users = await Prisma.getAllUsersSecure();
    return { success: true, users: users as User[] };
  }),
};
