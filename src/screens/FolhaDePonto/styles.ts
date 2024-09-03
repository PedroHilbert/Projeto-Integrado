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
  textoTituloSecao: {
    width: 90,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 6,

    fontSize: 12,
    fontFamily: "Inter_700Bold",
    color: "#082777",
    textAlign: "center",

    backgroundColor: "#F7AC25",
  },
});
