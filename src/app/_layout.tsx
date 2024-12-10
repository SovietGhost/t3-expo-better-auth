import { TRPCReactProvider } from "@/lib/react";
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <TRPCReactProvider>
            <Stack />
        </TRPCReactProvider>
    );
}
