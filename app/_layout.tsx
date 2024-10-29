import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { View } from "react-native";
import { useWallpapers } from "@/hooks/useWallpaper";
import DownloadPicture from "@/components/BottomSheet.Component";
import { useState } from "react";

export default function Layout() {
  const wallpapers = useWallpapers();
  const [isPictureVisible, setIsPictureVisible] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {isPictureVisible && (
        <View
          style={{
            flex: 1,
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        >
          <DownloadPicture
            wallpaper={wallpapers[0]}
            onClose={() => setIsPictureVisible(false)}
          />
        </View>
      )}
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}
