import React, { useCallback, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpapers } from "@/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "./ThemedView";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

export default function DownloadPicture({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpapers;
}) {
  const theme = useColorScheme() ?? "light";
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const defaultIconColor =
    theme === "light" ? Colors.light.icon : Colors.dark.icon;
  const [isLiked, setIsLiked] = useState(false);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <BottomSheet
      snapPoints={["100%"]}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      onClose={()=>{
        bottomSheetRef.current?.close();
      }}
      onChange={handleSheetChanges}
   
    
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
      style={{
        backgroundColor:
          theme === "light" ? Colors.light.background : Colors.dark.background,
      }}
    >
      <BottomSheetView style={styles.contentContainer} pointerEvents="none">
        <ThemedView style={{ flex: 1 }}>
          <Image
            source={{ uri: wallpaper.url?.toString() ?? "" }}
            style={styles.image}
          />
          <View style={styles.topBar}>
            <Pressable
              onPress={onClose}
              style={{
                backgroundColor:
                  theme === "light"
                    ? Colors.light.background
                    : Colors.dark.background,
                borderRadius: 20,
              }}
            >
              <Ionicons
                name={"close"}
                size={22}
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
            </Pressable>

            <Ionicons
              onPress={() => {
                setIsLiked(!isLiked);
              }}
              name={"heart"}
              size={22}
              color={isLiked ? "red" : defaultIconColor}
            />
          </View>

          <ThemedView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                margin: 5,
                color: theme === "light" ? Colors.light.text : Colors.dark.text,
              }}
            >
              {wallpaper.name}
            </Text>
            <Ionicons
              style={{ fontSize: 20 }}
              onPress={() => {}}
              name={"share"}
              size={22}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            >
              Share
            </Ionicons>
          </ThemedView>
          <Download url={wallpaper.url?.toString() ?? ""} />
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
}

function Download({ url }: { url: string }) {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      onPress={async () => {
        let date = new Date().getTime();
        let fileUrl = FileSystem.documentDirectory + `${date}.jpg`;
        try {
          await FileSystem.downloadAsync(url, fileUrl);
          const response = await MediaLibrary.requestPermissionsAsync(true);

          if (response.granted) {
            MediaLibrary.saveToLibraryAsync(fileUrl);
          } else {
            console.error("Permission not granted you couldn't save image");
          }
        } catch (e) {
          console.error(e);
        }
      }}
      style={{
        backgroundColor: "black",
        padding: 10,
        marginHorizontal: 30,
        paddingVertical: 15,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 17,
      }}
    >
      <Ionicons
        style={{
          fontSize: 20,
          flexDirection: "row",
          color: "white",
          fontWeight: 600,
        }}
        name={"download"}
        size={22}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
      >
        Download
      </Ionicons>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "70%",
    borderRadius: 15,
  },
  topBar: {
    position: "absolute",
    top: 0,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
});
function saveFile(url: any) {
  throw new Error("Function not implemented.");
}
