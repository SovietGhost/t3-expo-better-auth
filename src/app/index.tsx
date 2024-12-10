import { api } from "@/lib/react";
import { ActivityIndicator, View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
    const { data, isLoading } = api.test.hello.useQuery();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* <WebView source={{ uri: "http://192.168.0.100:8081/api/trpc/test.hello" }} /> */}
            {isLoading ? <ActivityIndicator /> : <Text>{data}</Text>}
        </View>
    );
}
