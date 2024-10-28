import { SplitView } from "@/components/SplitView";
import { View,StyleSheet,Text } from "react-native";
import { useLibraryWallpapers } from "@/hooks/useWallpaper";
import { ThemedView } from "@/components/ThemedView";

export default function Library() {
  const wallpaper = useLibraryWallpapers();

  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpaper} />
     
    </ThemedView>
  );
}

const styles =StyleSheet.create( {
    container: {
      flex: 1,
    },
  });