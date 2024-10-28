import { Text, Image, StyleSheet, View, Dimensions } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWallpapers, Wallpapers } from "@/hooks/useWallpaper";
import { SplitView } from "@/components/SplitView";
import Carousel from "react-native-reanimated-carousel";
import React from "react";
import { ThemedView } from "@/components/ThemedView";

export default function Explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Carousel
        loop
        autoPlay={true}
        scrollAnimationDuration={1200}
        width={width}
        height={width * 2}
        data={wallpapers}
        renderItem={({ index }) => (
          <View style={styles.carouselItem}>
            <ParallaxScrollView
              headerBackgroundColor={{ dark: "black", light: "white" }}
              headerImage={
                wallpapers[index]?.url ? (
                  <Image
                    style={styles.headerImage}
                    source={{ uri: wallpapers[index].url.toString() }}
                  />
                ) : (
                  <View style={styles.placeholder} />
                )
              }
            />
          </View>
        )}
      />
      <SplitView wallpapers={wallpapers} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  carouselItem: {
    flex: 1,
    justifyContent: "center",
  },
  headerImage: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    backgroundColor: "gray",
  },
});
