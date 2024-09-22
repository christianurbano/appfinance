import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Home";
import Stocks from "../Stocks";
import Funds from "../Funds";
import Pensions from "../Pensions";

const Stack = createNativeStackNavigator()
export default function Routes(){
    return(
        <Stack.Navigator
            initialRouteName="Home">
            
            <Stack.Screen
                name="Home"
                component={Home}
                options={{title: 'Initial'}}
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
        </Stack.Navigator>
    )
}