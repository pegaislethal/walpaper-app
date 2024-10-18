import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text } from 'react-native';
const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="suggested" component={SuggestedScreen} />
      <Tab.Screen name="liked" component={LikedScreen} />
      <Tab.Screen name="library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

function SuggestedScreen(){
  return(
    <View><Text>Suggested</Text></View>
  )
}

function LikedScreen(){
  return(
    <View><Text>Liked</Text></View>
  )
}

function LibraryScreen(){
  return(
    <View><Text>Library</Text></View>
  )
}