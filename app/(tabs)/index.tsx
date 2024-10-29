import { Image, View, Dimensions, Text, StyleSheet } from "react-native";
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
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { ThemedView } from "@/components/ThemedView";

const TOPBAR_HEIGHT = 250;

export default function Explore() {
  const wallpapers = useWallpapers();
  const width = Dimensions.get("window").width;
  const [yOffset, setScrollY] = useState(0);
  const carouselItems = useCarousel();
  console.log(carouselItems[0].title)

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            yOffset,
            [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT],
            [1.5, 1, 1]
          ),
        },
      ],
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        yOffset,
        [-TOPBAR_HEIGHT, TOPBAR_HEIGHT / 2, TOPBAR_HEIGHT],
        [1.5, 1, 1]
      ),
    };
  });

  return (
    <ThemedSafeAreaView style={{ flex: 1 }}>
      <Animated.View
        style={[
          { height: Math.max(0, TOPBAR_HEIGHT - yOffset) },
          headerAnimatedStyle,
        ]}
      >
        <Carousel
          width={width}
          data={carouselItems}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: carouselItems[index].image }}
                  style={{ height: TOPBAR_HEIGHT }}
                />
              </View>

              <LinearGradient
                colors={["transparent", "black"]}
                style={{
                  flex: 1,
                  position: "absolute",
                  zIndex: 10,
                  height: TOPBAR_HEIGHT / 2,
                  width: "100%",
                  bottom: 0,
                }}
              >
                <Animated.View style={textAnimatedStyle}>
                  <Text
                    style={[
                      {
                        color: "white",
                        paddingTop: TOPBAR_HEIGHT / 2,
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "600",
                        
                      },
                    ]}
                  >
                    
                    {carouselItems[index].title}
                  </Text>
                </Animated.View>
              </LinearGradient>
            </>
          )}
        />
      </Animated.View>
      <ThemedView style={{ flex: 1 }}>
        <SplitView
          // onScroll={(yOffset) => {
          //   setScrollY(yOffset);
          // }}
          wallpapers={wallpapers}
        />
      </ThemedView>
    </ThemedSafeAreaView>
  );
}
