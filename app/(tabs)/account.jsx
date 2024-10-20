import { Text,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
export default function account() {
  return (
    <SafeAreaView>
      

      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1680871320511-8be2085ff281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",
            }}
          />
        }
      >
        <Text>Explore Page</Text>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}
