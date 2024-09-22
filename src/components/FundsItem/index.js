import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function FundsItem({name, ticker, profitability, minimumValue}){
  return(
    <View style={styles.container}>
  <View style={styles.row}>
    <Text style={styles.header}>{name}</Text>        
  </View>
  <Text style={styles.title}>{ticker}</Text>
  <View style={styles.line} />
  <View style={styles.row}>
    <Text style={styles.subTitle}>Valor mínimo:</Text>
    <Text style={styles.value}>R$ {minimumValue}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.subTitle}>Rentabilidade:</Text>
    <Text style={styles.titleProfitability}>{profitability}%</Text>
  </View>
</View>
  )
}