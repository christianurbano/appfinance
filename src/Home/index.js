import React from "react";
import { View } from "react-native";
import ButtonMenu from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation= useNavigation()
    return(
        <View>
            <ButtonMenu
            title="Stocks"
            onPress={()=> navigation.navigate("Stocks")}/>
            <ButtonMenu
            title="Funds"
            onPress={()=> navigation.navigate("Funds")}/>
            <ButtonMenu
            title="Pensions"
            onPress={()=> navigation.navigate("Pensions")}/>
        </View>
    )
}