import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  cabecalho: {
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 32,
    backgroundColor: "#082777",
    flexDirection: "row",
    gap: 6,
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  containerColuna: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    width: "auto",
    marginTop: 15,
  },
});
