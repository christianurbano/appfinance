import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 120,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 8,
    borderColor: theme.colors.cardBorder,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    paddingVertical: 32,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.backgroundBase,
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: theme.colors.heading,
    marginBottom: 5,
  },
  subTitle: {},
  logo: {
    width: 28,
    height: 28,
  },
});
