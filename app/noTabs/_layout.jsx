import { Slot } from "expo-router";
import { View,Text } from "react-native";


export default function NoTabLayout(){
    return(
        <View>
            <View style={{backgroundColor:"black"}}>
                <Text style={{color:"white"}}>GO Back</Text>
            </View>
            <Slot/>
        </View>
    )
}