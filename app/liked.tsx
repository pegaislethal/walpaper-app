import { View,Text, StyleSheet } from "react-native";
import { SplitView } from "@/components/SplitView";
import { useWallpapers } from "@/hooks/useWallpaper";
export default function Liked(){
    const wallpaper = useWallpapers();
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