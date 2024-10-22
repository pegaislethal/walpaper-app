import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useWallpapers, Wallpapers } from "@/hooks/useWallpaper";

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

  // renders
  return (
    <BottomSheet
      snapPoints={["99%"]}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      onChange={handleSheetChanges}
      onClose={onClose} // Call onClose when BottomSheet closes
      handleIndicatorStyle={{ height: 0 }}
      handleStyle={{ height: 0 }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image
          source={{ uri: wallpaper.url?.toString() ?? "" }}
          style={styles.image}
        />
        <Text style={styles.title}>Title:{wallpaper.name}</Text>
        <Button title="download"></Button>
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
    height: "65%",
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    
  }
});
