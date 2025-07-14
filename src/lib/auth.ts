import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Resend } from "resend";
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "@prisma/client";
import { nextCookies } from "better-auth/next-js";
import { env } from "@/env";
import ForgotPasswordEmail from "@/components/emails/reset-password";
 
const resend = new Resend(process.env.RESEND_API_KEY);

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
        enabled: true,
        sendResetPassword: async ({user, url}, request) => {
             resend.emails.send({
                from: "onboarding@resend.dev",
                to: user.email,
                subject: "Réinitialisation de mot de passe",
                react: ForgotPasswordEmail({ userName: user.name, userEmail: user.email, resetUrl: url }),
            });
          },
    },
    database: prismaAdapter(prisma, {

        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    plugins: [nextCookies()]
});