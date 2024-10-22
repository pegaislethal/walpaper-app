import { useState } from "react";
import { Button, Image, Text, StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView"; // Ensure this is the correct path to your ThemedView component
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPicture from "../../components/BottomSheet.Component"; // Ensure this is the correct path to your component
import { useWallpapers, Wallpapers } from "@/hooks/useWallpaper";
import Card from "@/components/Card.Component";
import { FlatList } from "react-native-gesture-handler";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function Explore() {
  
  const wallpapers = useWallpapers();
  const [selectedWallapper, setSelectedWallpaper] = useState<null | Wallpapers>(
    null
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          headerBackgroundColor={{ dark: "black", light: "white" }}
          headerImage={
            <Image
              style={{ flex: 1 }}
              source={{
                uri: wallpapers[0]?.url ?? "",
              }}
            />
          }
        >
          <ThemedView style={styles.container}>
            <ThemedView style={styles.innercontainer}>
              <FlatList
                data={wallpapers.filter((_, index) => index % 2 === 0)}
                renderItem={({ item }) => (
                  <View style={styles.imageContainer}>
                    <Card
                      onPress={() => setSelectedWallpaper(item)}
                      wallpaper={item}
                    />
                  </View>
                )}
                keyExtractor={(item) => item.name}
              />
            </ThemedView>
            <ThemedView style={styles.innercontainer}>
              <FlatList
                data={wallpapers.filter((_, index) => index % 2 === 0)}
                renderItem={({ item }) => (
                  <View style={styles.imageContainer}>
                    <Card
                      onPress={() => setSelectedWallpaper(item)}
                      wallpaper={item}
                    />
                  </View>
                )}
                keyExtractor={(item) => item.name}
              />
            </ThemedView>
          </ThemedView>
        </ParallaxScrollView>

        {selectedWallapper && (
          <DownloadPicture onClose={() => setSelectedWallpaper(null)} wallpaper={selectedWallapper} />
        )}
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
