import React, { useCallback, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
  useColorScheme,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useWallpapers, Wallpapers } from "@/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function DownloadPicture({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpapers;
}) {
  // ref
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const wallpapers = useWallpapers();
  const theme = useColorScheme() ?? "light";
  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      // console.log("handleSheetChanges", index);
      if (index === -1) {
        onClose(); // Invoke onClose when the bottom sheet is closed
      }
    },
    [onClose]
  );

  return (
    <BottomSheet
      snapPoints={["100%"]}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      onChange={handleSheetChanges}
      onClose={onClose} // Call onClose when BottomSheet closes
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image
          source={{ uri: wallpaper.url?.toString() ?? "" }}
          style={styles.image}
        />
        <View style={styles.topBar}>
          <Ionicons
            onPress={() => {
              bottomSheetRef.current?.close();
            }}
            name={"close"}
            size={22}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          ></Ionicons>

          <Ionicons
            onPress={() => {
              
            }}
            name={"heart"}
            size={22}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          ></Ionicons>
        </View>

        <Text style={styles.title}>Title:{wallpaper.name}</Text>
        <Pressable style={styles.button}>
          <Button title="download"></Button>
        </Pressable>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "60%",
    // borderBottomLeftRadius: 22,
    // borderBottomRightRadius:22
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  button: {
    bottom: 1,
    width: "100%",
    position: "absolute",
  },
  topBar: {
    position: "absolute",
    top: 5,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
});
