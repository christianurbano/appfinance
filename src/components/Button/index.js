import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function ButtonMenu(props){

    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.row}>
        <View style={styles.circle}>
          <View style={styles.logo} resizeMode="contain">
            {props.icon}
          </View>
        </View>
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subTitle}></Text>
        </View>
      </View>
    </TouchableOpacity>
    )
}