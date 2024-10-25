import { Text,Image,Pressable, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function account() {
  return (
    <SafeAreaView>
     <Text>Account Page</Text>
     <Link href={"/accountinfo"}>
     <Text>Account Information</Text></Link>
    </SafeAreaView>
  );
}

function authButton({ labels, icons }: { 
  labels: string;
  icons: any })
{
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        padding: 10,
        marginHorizontal: 30,
        paddingVertical: 15,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 17,
      }}
    >
      {icons}
      <Text style={{
        fontSize:20,
        color:"white",
        fontWeight:"600",
      }}>{labels}</Text>
    </Pressable>
  );
}
  
