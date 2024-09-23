import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ButtonMenu from "../components/Button";
import LogoStack from "../../assets/icon/Stocks.svg"
import LogoFunds from "../../assets/icon/Funds.svg"
import LogoPension from "../../assets/icon/Pensions.svg"
export default function Home(){
    const navigation= useNavigation()
    return(
        <View>
            <ButtonMenu
            icon={<LogoStack/>}
            title="Stocks"
            onPress={()=> navigation.navigate("Stocks")}/>
            <ButtonMenu
            icon={<LogoFunds/>}
            title="Funds"
            onPress={()=> navigation.navigate("Funds")}/>
            <ButtonMenu
            icon={<LogoPension/>}
            title="Pensions"
            onPress={()=> navigation.navigate("Pensions")}/>
        </View>
    )
}