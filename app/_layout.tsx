import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="(nobottombar)/accountinfo" options={{headerShown:true,headerTitle:"AccountInfo",headerBackTitle:"Go back", headerTitleAlign:"center"  }}/>
        </Stack>
    </GestureHandlerRootView>
  );
}
