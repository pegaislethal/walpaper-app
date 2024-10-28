import { View,Text, StyleSheet } from "react-native";
import { SplitView } from "@/components/SplitView";
import { useLikededWallpapers, useWallpapers } from "@/hooks/useWallpaper";
import { ThemedView } from "@/components/ThemedView";
export default function Liked(){
    const wallpaper = useLikededWallpapers();
    return(
        <ThemedView style={styles.container}>
            <SplitView wallpapers={wallpaper}/>
        </ThemedView>
    )
}

const styles =StyleSheet.create( {
    container: {
      flex: 1,
    },
  });