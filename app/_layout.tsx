import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { View } from "react-native";
import { useWallpapers } from "@/hooks/useWallpaper";
import { DownloadPicture } from "@/components/BottomSheet.Component";
export default function Layout() {
  const wallpapers = useWallpapers();
  return (
    <GestureHandlerRootView >
     <View style={{flex:1,position:"absolute",height:" 100%",width:"100%"}}> 
      <DownloadPicture wallpaper={wallpapers[0]} onClose={()=>{}}/>
      </View> 
      <Stack screenOptions={{
        headerShown:false
      }}>

        </Stack>
    </GestureHandlerRootView>
  );
}
