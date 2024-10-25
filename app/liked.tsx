import { View,Text, StyleSheet } from "react-native";
import { SplitView } from "@/components/SplitView";
import { useLikededWallpapers, useWallpapers } from "@/hooks/useWallpaper";
export default function Liked(){
    const wallpaper = useLikededWallpapers();
    return(
        <View style={styles.container}>
            <SplitView wallpapers={wallpaper}/>
        </View>
    )
}

const styles =StyleSheet.create( {
    container: {
      flex: 1,
    },
  });