import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Library from "../library";
import Liked from "../liked";
import Suggested from "../suggested";
import { StyleSheet, Image, View, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const theme = useColorScheme()??"light";
  return (
    <SafeAreaView style={styles.container}>
  
      <Tab.Navigator style={{flex:1,

      }} screenOptions={{
        tabBarActiveTintColor:Colors[theme].tint,
        tabBarStyle:{
          backgroundColor:Colors[theme].background
        }
      }}>
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
