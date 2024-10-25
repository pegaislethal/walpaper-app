import {
  Text,
  Image,
  Pressable,
  useColorScheme,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

export default function account() {
  const theme = useColorScheme() ?? "light";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{flex:1}}>
        <AuthButton
          labels={"Sign In"}
          icons={
            <Ionicons
              name={"logo-google"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />      
          }
        />

<AuthButton
          labels={"Sign In"}
          icons={
            <Ionicons
              name={"logo-apple"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />      
          }
        />
    


      </View>

      <View style={{}}>
        <Link href={"/accountinfo"}>
          <Text>Account Information</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View style={styles.topBar}>
      <ThemedText style={styles.textBig}>Panels</ThemedText>
      <ThemedText>Sign in to save your data</ThemedText>
    </View>
  );
}

function AuthButton({ labels, icons }: { labels: string; icons: any }) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        padding: 10,
        marginHorizontal: 40,
        paddingVertical: 15,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 17,
      }}
    >
      {icons}
      <Text
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "600",
        }}
      >
        {labels}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textBig: {
    fontSize: 20,
    fontWeight: 600,
  },
  topBar: {
    padding: 20,
  },
  bottom:{
  }
});
