import { useState } from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { View } from "react-native-web";
import App from "../../components/BottomSheet.Component";
export default function explore() {
  const [pictureOpen, setpictureOpen] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <Text>Explore page</Text>
        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            setpictureOpen(true);
          }}
        ></Button>
        {pictureOpen && < App/>}
      </View>
    </SafeAreaView>
  );
}
