import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "@prisma/client";
import { nextCookies } from "better-auth/next-js";
import { env } from "@/env";
 
const prisma = new PrismaClient();

export const auth = betterAuth({
    secret: env.BETTER_AUTH_SECRET,
    socialProviders: {
        google: { 
            prompt: "select_account", 
            clientId: env.GOOGLE_CLIENT_ID, 
            clientSecret: env.GOOGLE_CLIENT_SECRET, 
        }
    },
    emailAndPassword: {
        enabled: true
    },
    database: prismaAdapter(prisma, {

        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    plugins: [nextCookies()]
});