import { useWallpapers, Wallpapers } from "@/hooks/useWallpaper";
import { ThemedView } from "./ThemedView";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "./Card.Component";
import { useState } from "react";
import React from "react";
import DownloadPicture from "./BottomSheet.Component";

export function SplitView({
  wallpapers,
  onScroll,
}: {
  wallpapers: Wallpapers[];
  onScroll?: (yOffset: number) => void;
}) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpapers>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  return (
    <>
      <FlatList
        onScrollBeginDrag={() => setIsScrolling(true)}
        onScrollEndDrag={() => setIsScrolling(false)}
        onScroll={(e) => {
          let yOffset = e.nativeEvent.contentOffset.y * 2;
          onScroll?.(yOffset);
        }}
        data={wallpapers
          .filter((_, index) => index % 2 === 1)
          .map((_, index) => [wallpapers[index], wallpapers[index + 1]])}
        renderItem={({ item: [first, second] }) => (
          <ThemedView style={styles.container}>
            <ThemedView style={styles.innerContainer}>
              <View style={styles.imageContainer}>
                <Card
                  onPress={() => {
                    if (!isScrolling) setSelectedWallpaper(first);
                  }}
                  wallpaper={first}
                  isScrolling={isScrolling}  // Passing isScrolling to Card
                />
              </View>
            </ThemedView>
            <ThemedView style={styles.innerContainer}>
              {second && (
                <View style={styles.imageContainer}>
                  <Card
                    wallpaper={second}
                    onPress={() => {
                      if (!isScrolling) setSelectedWallpaper(second);
                    }}
                    isScrolling={isScrolling}  // Passing isScrolling to Card
                  />
                </View>
              )}
            </ThemedView>
          </ThemedView>
        )}
        keyExtractor={(item) => item[0].name as string}
      />
      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
