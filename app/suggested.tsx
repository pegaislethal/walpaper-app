import { View, Text, StyleSheet } from "react-native";
import { useSuggestedWallpapers, useWallpapers } from "@/hooks/useWallpaper";
import { SplitView } from "@/components/SplitView";
export default function Suggested() {
  const wallpaper = useSuggestedWallpapers();
  return (
    <View style={styles.container}>
      <SplitView wallpapers={wallpaper} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
