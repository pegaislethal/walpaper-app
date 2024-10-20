import { Text,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function account() {
  return (
    <SafeAreaView>
     <Text>Account Page</Text>
     <Link href={"/accountinfo"}>
     <Text>Account Information</Text></Link>
    </SafeAreaView>
  );
}
