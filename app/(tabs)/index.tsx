import { useState } from "react";
import { Button, View, Image, Text, StyleSheet } from "react-native";
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
          
          <View style={styles.container}>
            <View style={styles.innercontainer}>
            <FlatList 
          data={wallpapers}
          renderItem={({item})=><Card wallpaper={item} />}
          keyExtractor={item=>item.name}>
            
          </FlatList>
            </View>
            <View style={styles.innercontainer}>
            <FlatList 
          data={wallpapers}
          renderItem={({item})=><Card wallpaper={item} />}
          keyExtractor={item=>item.name}>
            
          </FlatList>
            </View>
          </View>
        </ParallaxScrollView>
        {pictureOpen && (
          <DownloadPicture onClose={() => setPictureOpen(false)} /> // Close the sheet when onClose is triggered
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    flex:1,
    
  },
  innercontainer:{
    flex: 0.5,
    padding:12
  }
});
