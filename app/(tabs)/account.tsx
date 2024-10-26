import {
  Text,
  Pressable,
  useColorScheme,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <LoginButton />
        <ThemeSelector />
      </View>
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
    <View style={styles.topBar}>
      <ThemedText style={styles.titleText}>Panels</ThemedText>
      <ThemedText style={styles.subtitleText}>
        Sign in to save your data
      </ThemedText>
    </View>
  );
}

function LoginButton() {
  const theme = useColorScheme() ?? "light";
  const iconColor = theme === "light" ? "#000" : "#fff";
  return (
    <View style={styles.authContainer}>
      <AuthButton
        labels={"Sign In with Google"}
        icons={<Ionicons name={"logo-google"} size={24} color={iconColor} />}
      />
      <AuthButton
        labels={"Sign In with Apple"}
        icons={<Ionicons name={"logo-apple"} size={24} color={iconColor} />}
      />
    </View>
  );
}

function ThemeSelector() {
  return (
    <View style={styles.themeSelectorContainer}>
      <ThemedText style={styles.sectionTitle}>Settings</ThemedText>
      <ThemedText style={styles.themeText}>Theme</ThemedText>

      <View style={styles.themeButtonContainer}>
        <ThemeButton title={"Dark"} selected={false} />
        <ThemeButton title={"Light"} selected={false} />
        <ThemeButton title={"System"} selected={false} />
      </View>
    </View>
  );
}

function ThemeButton({
  title,
  selected,
}: {
  title: string;
  selected: boolean;
}) {
  return (
    <Pressable
      style={[styles.themeButton, selected && styles.themeButtonSelected]}
    >
      <ThemedText style={styles.themeButtonText}>{title}</ThemedText>
    </Pressable>
  );
}

function AuthButton({ labels, icons }: { labels: string; icons: any }) {
  return (
    <Pressable style={styles.authButton}>
      {icons}
      <Text style={styles.authButtonText}>{labels}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topBar: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#e0e0e0",
    marginTop: 5,
  },
  authContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  authButton: {
    backgroundColor: "black",
    padding: 15,
    marginVertical: 10,
    width: "85%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  authButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
    marginLeft: 10,
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
  themeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#d3d3d3",
  },
  themeButtonSelected: {
    backgroundColor: "#6200ea",
  },
  themeButtonText: {
    fontSize: 16,
    color: "#333",
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
