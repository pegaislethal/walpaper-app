import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { View,Text } from 'react-native';
const Tab = createMaterialTopTabNavigator();
import Library from '../library';
import Liked from '../liked';
import AddImage from '../addImage';
import Suggested from '../suggested';
export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="suggested" component={Suggested} />
      <Tab.Screen name="liked" component={Liked} />
      <Tab.Screen name="library" component={Library} />
      <Tab.Screen name="addimage" component={AddImage}/>
    </Tab.Navigator>
  );
}



