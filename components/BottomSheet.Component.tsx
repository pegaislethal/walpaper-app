import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useWallpapers } from "@/hooks/useWallpaper";

export default function DownloadPicture({ onClose }: { onClose: () => void }) {
  // ref
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const wallpaper = useWallpapers();
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
    <View style={styles.container}>
      <BottomSheet
        snapPoints={["100%"]}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}
        onClose={onClose} // Call onClose when BottomSheet closes
        handleIndicatorStyle={{height:0}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
   
  },
});
