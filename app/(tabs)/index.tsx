import { Image, View, Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWallpapers } from "@/hooks/useWallpaper";
import { SplitView } from "@/components/SplitView";
import Carousel from "react-native-reanimated-carousel";
import React, { useState } from "react";
import useCarousel from "@/hooks/useCarousel";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "@/components/ThemedText";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
const TOPBAR_HEIGHT = 150;

export default function Explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get("window").width;
  const [yOffset, setScrollY] = useState(0);
  const carousel = useCarousel();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            yOffset,
            [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedSafeAreaView style={{ flex: 1 }}>
      <Animated.View
        style={[{ height: TOPBAR_HEIGHT - yOffset }, headerAnimatedStyle]}
      >
        <Carousel
          width={width}
          height={TOPBAR_HEIGHT - yOffset}
          data={carousel}
          renderItem={({ index }) => (
            <View>
              <View
                style={{ flex: 1, borderWidth: 1, justifyContent: "center" }}
              >
                <Image
                  source={{ uri: carousel[index].image }}
                  style={{ height: 500 }}
                />
              </View>
              <LinearGradient
                colors={["transparent", "black"]}
                style={{
                  flex: 1,
                  position: "absolute",
                  zIndex: 10,
                  height: TOPBAR_HEIGHT / 1,
                  width: "100%",
                }}
              >
                <ThemedText
                  style={{
                    paddingTop: TOPBAR_HEIGHT / 1.2,
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: 500,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "red",
                  }}
                >
                  {carousel[index].title}
                </ThemedText>
              </LinearGradient>
            </View>
          )}
        />
      </Animated.View>
      <View style={{ borderRadius: 20 }}>
        <SplitView
          onScroll={(yOffset) => {
            setScrollY(yOffset);
          }}
          wallpapers={wallpapers}
        />
      </View>
    </ThemedSafeAreaView>
  );
}
