import { SplitView } from "@/components/SplitView";
import { View,StyleSheet,Text } from "react-native";
import { useLibraryWallpapers } from "@/hooks/useWallpaper";

export default function Library() {
  const wallpaper = useLibraryWallpapers();

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