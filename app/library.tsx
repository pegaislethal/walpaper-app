import { SplitView } from "@/components/SplitView";
import { useWallpapers } from "@/hooks/useWallpaper";
import { View,StyleSheet,Text } from "react-native";

export default function Library() {
  const wallpaper = useWallpapers();

  return (
    <View style={styles.container}>
      <SplitView wallpapers={wallpaper} />
     
    </View>
  );
}

const styles =StyleSheet.create( {
    container: {
      flex: 1,
    },
  });