import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function DownloadPicture({ onClose }: { onClose: () => void }) {
  // ref
  const bottomSheetRef = useRef<BottomSheet | null>(null);

  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      console.log("handleSheetChanges", index);
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
        snapPoints={["99%"]}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        onChange={handleSheetChanges}
        onClose={onClose} // Call onClose when BottomSheet closes
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
