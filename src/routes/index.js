import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Home";
import Stocks from "../Stocks";
import Funds from "../Funds";
import Pensions from "../Pensions";
import BackIcon from "../../assets/icon/BackIcon.svg"
import { TouchableOpacity } from "react-native";
const Stack = createNativeStackNavigator()
export default function Routes(){
    return(
        <Stack.Navigator
            initialRouteName="Home"
            >
            <Stack.Group
                screenOptions={({navigation})=> ({
                    
                    presentation:'modal',
                    headerStyle: {backgroundColor:"#6F4DBF"},
                    headerLeft: () =>(
                        <TouchableOpacity onPress={()=> {navigation.goBack()}}>
                                <BackIcon/> 
                        </TouchableOpacity>
                    ),
                headerBackTitleVisible: false,})}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="Stocks"
                    component={Stocks}
                    options={{title: 'Stocks'}}
                />
                <Stack.Screen
                    name="Funds"
                    component={Funds}
                    options={{title: 'Funds'}}
                />
                <Stack.Screen
                    name="Pensions"
                    component={Pensions}
                    options={{title: 'Pensions'}}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}