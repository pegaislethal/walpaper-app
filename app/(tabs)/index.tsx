import { useState } from "react";
import { Button, Image, Text, StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView"; // Ensure this is the correct path to your ThemedView component
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPicture from "../../components/BottomSheet.Component"; // Ensure this is the correct path to your component
import { useWallpapers, Wallpapers } from "@/hooks/useWallpaper";
import Card from "@/components/Card.Component";
import { FlatList } from "react-native-gesture-handler";

export default function Explore() {
  const [pictureOpen, setPictureOpen] = useState(false);
  const wallpapers = useWallpapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            setPictureOpen(true);
          }}
        />
         {pictureOpen && (
          <DownloadPicture onClose={() => setPictureOpen(false)} /> // Close the sheet when onClose is triggered
        )}

        <ParallaxScrollView
          headerBackgroundColor={{ dark: "black", light: "white" }}
          headerImage={
            <Image
              style={{ flex: 1 }}
              source={{
                uri: wallpapers[0]?.url ?? "",
              }}
            />
          }
        >
          <ThemedView style={styles.container}>
            <ThemedView style={styles.innercontainer}>
              <FlatList
                data={wallpapers.filter((_,index)=>index%2===0)}
                renderItem={({ item }) =><View style={styles.imageContainer}><Card wallpaper={item} /></View>}
                keyExtractor={(item) => item.name}
              />
            </ThemedView>
            <ThemedView style={styles.innercontainer}>
            <FlatList
                data={wallpapers.filter((_,index)=>index%2===1)}
                renderItem={({ item }) =><View style={styles.imageContainer}><Card wallpaper={item} /></View>}
                keyExtractor={(item) => item.name}
              />
            </ThemedView>
          </ThemedView>
        </ParallaxScrollView>
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor:"red"
  },
  innercontainer: {
    flex: 0.5,
    padding: 4,
  },
  imageContainer:{
    paddingVertical:10
  }
});
