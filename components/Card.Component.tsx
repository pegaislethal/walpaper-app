import { View, Image, StyleSheet, Pressable } from "react-native";
import { useWallpapers, Wallpapers } from "@/hooks/useWallpaper";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "@/constants/Colors";
import { useState } from "react";

export default function Card({
  wallpaper,
  onPress,
  isScrolling, // Accept isScrolling prop
}: {
  wallpaper: Wallpapers;
  onPress: () => void;
  isScrolling: boolean; // Add isScrolling type
}) {
  const theme = useColorScheme() ?? "light";
  const [isLiked, setIsLiked] = useState(false);
  const defaultIconColor = theme === "light" ? Colors.light.icon : Colors.dark.icon;

  return (
    <Pressable onPress={!isScrolling ? onPress : undefined}>
      <View style={style.container}>
        <Image source={{ uri: wallpaper.url as string }} style={style.image} />
        <View style={style.labelcontainer}>
          <ThemedText style={style.label}>{wallpaper.name}</ThemedText>
          <Ionicons
            onPress={() => {
              if (!isScrolling) setIsLiked(!isLiked);
            }}
            name="heart"
            size={18}
            color={isLiked ? "red" : defaultIconColor}
          />
        </View>
      </View>
    </Pressable>
  );
}


const style = StyleSheet.create({
  container: {
    margin: 4,
  },
  image: {
    flex: 1,
    height: 250,
    borderRadius: 20,
  },
  label: {
    color: "white",
  },
  labelcontainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
});
