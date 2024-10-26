import {
  Text,
  Pressable,
  useColorScheme,
  View,
  StyleSheet,
  Appearance,
  Button,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export default function Account() {
  const them = useColorScheme() ?? "light";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ThemedView style={styles.content}>
        <LoginButton />
        <ThemeSelector />
      </ThemedView>
      <View style={styles.linkContainer}>
        <Link href={"/accountinfo"}>
          <ThemedText style={styles.linkText}>Account Information</ThemedText>
        </Link>
      </View>
    </SafeAreaView>
  );
}

function Header() {
  return (
    <ThemedView style={styles.topBar}>
      <ThemedText style={styles.titleText}>Panels</ThemedText>
      <ThemedText style={styles.subtitleText}>
        Sign in to save your data
      </ThemedText>
    </ThemedView>
  );
}

function LoginButton() {
  const theme = useColorScheme() ?? "light";
  return (
    <View style={styles.authContainer}>
      <AuthButton
        labels={"Sign In with Google"}
        icons={
          <Ionicons
            name={"logo-google"}
            size={24}
            color={theme === "light" ? Colors.light.text : Colors.dark.icon}
          />
        }
      />
      <AuthButton
        labels={"Sign In with Apple"}
        icons={
          <Ionicons
            name={"logo-apple"}
            size={24}
            color={theme === "light" ? Colors.light.text : Colors.dark.icon}
          />
        }
      />
    </View>
  );
}

function ThemeSelector() {
  return (
    <ThemedView style={styles.themeSelectorContainer}>
      <ThemedText style={styles.sectionTitle}>Settings</ThemedText>
      <ThemedText style={styles.themeText}>Theme</ThemedText>

      <ThemedView style={styles.themeButtonContainer}>
        <ThemeButton title={"Dark"} selected={false} colorScheme="dark" />
        <ThemeButton title={"Light"} selected={false} colorScheme="light" />
        <ThemeButton title={"System"} selected={false} colorScheme={null} />
      </ThemedView>
    </ThemedView>
  );
}

function ThemeButton({
  title,
  selected,
  colorScheme,
}: {
  selected: boolean;
  title: string;
  colorScheme: "dark" | "light" | null;
}) {
  const theme = useColorScheme();

  return (
    <Pressable
      style={{
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.icon,
        flex: 0.3,
      }}
      onPress={() => {
        Appearance.setColorScheme(colorScheme);
      }}
    >
      <ThemedText style={{ width: "100%", textAlign: "center" }}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

function AuthButton({ labels, icons }: { labels: string; icons: any }) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        backgroundColor: theme,
        padding: 15,
        marginVertical: 10,
        width: "85%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon,
      }}
    >
  
      {icons}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginLeft: 10,
        }}
      >
        {labels}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topBar: {
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
  },
  subtitleText: {
    fontSize: 16,
    color: "#000000",
    marginTop: 5,
  },
  authContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  themeSelectorContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 10,
    color: "black",
  },
  themeText: {
    fontSize: 20,
    color: "black",
    marginBottom: 10,
    fontWeight: 500,
  },
  themeButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    margin: 20,
  },
  linkContainer: {
    paddingVertical: 10,
    left: 20,
  },
  linkText: {
    fontSize: 18,
    color: "black",
  },
});
