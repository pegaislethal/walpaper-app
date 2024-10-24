import { View, Text, StyleSheet } from "react-native";
import { useWallpapers } from "@/hooks/useWallpaper";
import { SplitView } from "@/components/SplitView";
export default function Suggested() {
  const wallpaper = useWallpapers();
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
