import React, { useEffect, useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./navigation/AppNavigator";
import "./styles/SwiperlogsStyles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "LibreBaskerville-Regular": require("./assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway/static/Raleway-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="light" backgroundColor="#1E1E1E" />
      <AppNavigator />
    </GestureHandlerRootView>
  );
}
