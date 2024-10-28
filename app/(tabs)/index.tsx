import { Text, Image, StyleSheet, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWallpapers } from "@/hooks/useWallpaper";
import { SplitView } from "@/components/SplitView";
import Carousel from "react-native-reanimated-carousel";
import React, { useState } from "react";
import useCarousel from "@/hooks/useCarousel";



export default function Explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get("window").width;
  const [yOffset, setScrollY] = useState(0);
  const carousel = useCarousel();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 300-yOffset }}>
        <Carousel
          width={width}
          height={300-yOffset}
          data={carousel}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ index }) => (
            <View style={styles.carouselItem}>
              <Image
                source={{ uri: carousel[index] }}
                style={{height:300}}
                resizeMode="cover"
              />
            </View>
          )}
        />
      </View>
      <SplitView onScroll={setScrollY} wallpapers={wallpapers} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  carouselItem: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
 
  placeholder: {
    flex: 1,
    backgroundColor: "gray",
  },
});
