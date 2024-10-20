import { View, Image, StyleSheet } from "react-native";
import { useWallpapers, Wallpapers } from "@/hooks/useWallpaper";

export default function Card({wallpaper }:{wallpaper:Wallpapers} ) {
  return (
    <View>
      <Image
        source={{ uri:wallpaper.url as string  }}
        style={style.image}
     
      />
    </View>
  );
}
const style = StyleSheet.create({
  image: {
    flex: 1,
    height: 280,
  },
});
