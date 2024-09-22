import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export default function StocksItem({name, ticker, profitability, minimumValue}){
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    borderRadius: 8,
    borderColor: theme.colors.cardBorder,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  heart: {
    height: 1,
    width: 24,
  },
  header: {
    color: theme.colors.title,
    fontFamily: theme.fonts.fontHeader,
    fontSize: 16,
  },
  title: {
    color: theme.colors.title,
    fontFamily: theme.fonts.fontTitle,
    fontSize: 15,
  },
  line: {
    flex: 1,
    backgroundColor: theme.colors.cardBorder,
    height: 1,
    marginTop: 15,
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
  },
  subTitle: {
    fontFamily: theme.fonts.fontSubTitle,
    color: theme.colors.title,
    fontSize: 10,
  },
  value: {
    fontFamily: theme.fonts.fontTitle,
    color: theme.colors.title,
    fontSize: 12,
  },
  titleProfitability: {
    fontFamily: theme.fonts.fontTitle,
    color: theme.colors.rentabilidade,
    fontSize: 12,
  },
});
