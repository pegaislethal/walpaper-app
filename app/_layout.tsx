import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { useWallpapers } from "@/hooks/useWallpaper";
import DownloadPicture from "@/components/BottomSheet.Component";
export default function Layout() {
  const wallpapers = useWallpapers();
  return (
    <GestureHandlerRootView >
      <DownloadPicture wallpaper={wallpapers[0]} onClose={()=>{}}/>
      <Stack screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="(nobottombar)/accountinfo"
         options={
          { 
          headerShown:true,
          headerTitle:"AccountInfo",
          headerBackTitle:"Go back",
          headerTitleAlign:"center" 
            }
          }/>
        </Stack>
    </GestureHandlerRootView>
  );
}
