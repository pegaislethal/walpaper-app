import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Library from "../library";
import Liked from "../liked";
import Suggested from "../suggested";
import { StyleSheet, Image, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  
  return (
    <SafeAreaView style={styles.container}>
  
      <Tab.Navigator>
        <Tab.Screen name="suggested" component={Suggested} />
        <Tab.Screen name="liked" component={Liked} />
        <Tab.Screen name="library" component={Library} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
