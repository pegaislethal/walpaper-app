import { ThemedView } from "@/components/ThemedView";
import { Text,StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

export default function AccountInfo() {
  const theme = useColorScheme();
  return (
    
      <ThemedView style={{flex:1,padding:10}}>     
         <Text style={{
            color:theme === "light" ? Colors.light.icon : Colors.dark.icon,
            fontSize:16,
            fontWeight:400
         }}>Account Info</Text>
      </ThemedView>

  );
}

const styles = StyleSheet.create({
  margin: {
    margin: 10,
  },
})