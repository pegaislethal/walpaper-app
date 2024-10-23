import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Library from "../library";
import Liked from "../liked";
import Suggested from "../suggested";
import { StyleSheet, Image, View } from "react-native";
import { useWallpapers } from "@/hooks/useWallpaper";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const wallpapers = useWallpapers(); // Fetch wallpapers data
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: wallpapers[2]?.url }} 
          style={styles.image} 
          resizeMode="cover"
        />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="suggested" component={Suggested} />
        <Tab.Screen name="liked" component={Liked} />
        <Tab.Screen name="library" component={Library} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 260, // Height of the image container
  },
  image: {
    width: "100%", // Full width of the screen
    height: "100%", // Full height of the image container
  },
});
