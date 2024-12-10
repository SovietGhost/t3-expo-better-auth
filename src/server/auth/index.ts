import { betterAuth } from "better-auth";
import { username, anonymous } from "better-auth/plugins";
import { expo } from "@better-auth/expo";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "@/server/db";

export const auth = betterAuth({
    database: prismaAdapter(db, { provider: "postgresql" }),
    plugins: [username(), anonymous(), expo()],
    trustedOrigins: ["myapp://"],
    logger: {
        disabled: false,
        level: "debug",
        log(level, message, ...args) {
            console.log(`[${level}]: ${message}`, args);
        },
    },
});
