import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {SplashScreen, Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
// import 'react-native-reanimated';
import "./global.css";

import GlobalProvider from "../context/GlobalProvider";
import {useColorScheme} from "@/hooks/use-color-scheme";
import {useEffect} from "react";

export const unstable_settings = {
    anchor: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [fonstsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fonstsLoaded) SplashScreen.hideAsync();
    }, [fonstsLoaded, error]);

    if (!fonstsLoaded && !error) return null;

    return (
        <GlobalProvider>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="index" options={{headerShown: false}} />
                    <Stack.Screen name="(tabs)" options={{headerShown: false}} />
                    <Stack.Screen name="modal" options={{presentation: "modal", title: "Modal"}} />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </GlobalProvider>
    );
}
