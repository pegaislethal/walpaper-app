import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ThemedView } from "@/components/ThemedView";
import Card from "@/components/Card.Component";
import { Wallpapers } from "@/hooks/useWallpaper";
import { useState } from "react";
import DownloadPicture from "./BottomSheet.Component";

export function SplitView({ wallpapers }: { wallpapers: Wallpapers[]}) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpapers>(null);


  if (!wallpapers || wallpapers.length === 0) {
    return <Text>No wallpapers available</Text>;
  }

  return (
    <View style={{flex:1}}>
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
            keyExtractor={(item) => item.name ? item.name.toString() : String(item)}
          />
        </ThemedView>
        <ThemedView style={styles.innercontainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 === 1)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Card
                  onPress={() => setSelectedWallpaper(item)}
                  wallpaper={item} 
                />
              </View>
            )}
            keyExtractor={(item) => item.name ? item.name.toString() : String(item)}
          />
        </ThemedView>
      </ThemedView>

      {selectedWallpaper && (
        <DownloadPicture
          onClose={() => setSelectedWallpaper(null)}
          wallpaper={selectedWallpaper}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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


