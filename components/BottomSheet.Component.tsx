import React, { useCallback, useRef, useState } from "react";
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
import {  Wallpapers } from "@/hooks/useWallpaper";
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
  const theme = useColorScheme() ?? "light";
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const defaultIconColor = theme === "light" ? Colors.light.icon : Colors.dark.icon;
  const [isLiked, setIsLiked] = useState(false);



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
          style={{backgroundColor:"black"}}
            onPress={() => {
              bottomSheetRef.current?.close();
            }}
            name={"close"}
            size={22}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          ></Ionicons>

          <Ionicons
            onPress={() => {
                setIsLiked(!isLiked)
            }}
            name={"heart"}
            size={22}
            color={isLiked?"red":defaultIconColor}
          ></Ionicons>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 8,
          }}
        >
          <Text style={styles.title}>{wallpaper.name}</Text>
          <Ionicons
            style={{ fontSize: 20 }}
            onPress={() => {
             
            }}
            name={"share"}
            size={22}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          >
            Share
          </Ionicons>
        </View>
        <Download />
      </BottomSheetView>
    </BottomSheet>
  );
}

function Download() {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
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
{/*       
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "600",
        }}
      >
        Download
      </Text> */}
      <Ionicons
        style={{ fontSize: 20, flexDirection: "row",color:"white",fontWeight:600 }}
        onPress={() => {}}
        name={"download"}
        size={22}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
      >Download</Ionicons>
    </Pressable>
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
    height: "70%",
    // borderBottomLeftRadius: 22,
    // borderBottomRightRadius:22
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 5,
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
