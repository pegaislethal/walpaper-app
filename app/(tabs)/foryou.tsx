import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Library from "../library";
import Liked from "../liked";
import Suggested from "../suggested";
import { StyleSheet, Image, View } from "react-native";
import { useWallpapers } from "@/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";
import { SplitView } from "@/components/SplitView";
const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const wallpapers = useWallpapers(); // Fetch wallpapers data
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <View  style={styles.personBar}>
        <Ionicons
        name={"person"}
        size={30}
        >

        </Ionicons>
      </View> */}
      <Tab.Navigator>
        <Tab.Screen name="suggested" component={Suggested} />
        <Tab.Screen name="liked" component={Liked} />
        <Tab.Screen name="library" component={Library} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// export  function Liked(){
//   const wallpaper = useWallpapers();
//   return(
//     <View style={styles.container}>
//           <SplitView wallpapers={wallpaper}/>
//       </View>
//   )
// }

// export function Library() {
//   const wallpaper = useWallpapers();

//   return (
//     <View style={styles.container}>
//       <SplitView wallpapers={wallpaper} />
//     </View>
//   );
// }

// export  function Suggested() {
//   const wallpaper = useWallpapers();
//   return (
//     <View style={styles.container}>
//       <SplitView wallpapers={wallpaper} />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  personBar: {
    height: 160, // Height of the image container
    borderRadius:40,
    backgroundColor:"#33322f"
  },
  image: {
    width: "100%", // Full width of the screen
    height: "100%", // Full height of the image container
  },
});
