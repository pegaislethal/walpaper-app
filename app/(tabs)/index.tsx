import { useState } from "react";
import {  Image, Text, StyleSheet, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPicture from "../../components/BottomSheet.Component"; // Ensure this is the correct path to your component
import { useWallpapers, Wallpapers } from "@/hooks/useWallpaper";
import { SplitView } from "@/components/SplitView";

export default function Explore() {
  
  const wallpapers = useWallpapers();


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          headerBackgroundColor={{ dark: "black", light: "white" }}
          headerImage={
            <Image
              style={{ flex: 1 }}
              source={{
                uri: wallpapers[0]?.url?.toString() ?? "",
              }}
            />
          }
        >
          <SplitView wallpapers={wallpapers} />
        </ParallaxScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  innercontainer: {
    flex: 0.5,
    padding: 4,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
