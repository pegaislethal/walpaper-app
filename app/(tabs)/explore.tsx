import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPicture from "../../components/BottomSheet.Component"; // Ensure this is the correct path to your component
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image } from "react-native";
export default function Explore() {
  const [pictureOpen, setPictureOpen] = useState(false);

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
      </View>
    </SafeAreaView>
  );
}
