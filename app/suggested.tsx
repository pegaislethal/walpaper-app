import { View, Text, StyleSheet } from "react-native";
import { useSuggestedWallpapers, useWallpapers } from "@/hooks/useWallpaper";
import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
export default function Suggested() {
  const wallpaper = useSuggestedWallpapers();
  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpaper} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
