import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/src/client";

const authClient = createAuthClient({
    baseURL:
        process.env.EXPO_PUBLIC_BASE_URL /* base url of your Better Auth backend. */,
    plugins: [
        expoClient({
            scheme: "myapp",
            storagePrefix: "myapp",
        }),
    ],
});
