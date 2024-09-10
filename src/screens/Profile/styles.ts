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
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 15,
  },
  coluna1: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    gap: 10,
  },
  coluna2: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
  },
  containerImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  containerLinha: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 50,
  },
  containerLinha1: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    width: "100%",

    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#F3F4F6",
    backgroundColor: "#FFF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15,

    elevation: 5,

    padding: 8,
    paddingRight: 16,
    marginBottom: 25,
  },
  titulo1: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
  },
  titulo2: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    color: "#082777",
  },
  titulo3: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: "#082777",
  },
  botaoSair: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 50,
    paddingVertical: 10,
    gap: 5,
    marginBottom: 35,
    marginHorizontal: 16,

    borderRadius: 12,
    backgroundColor: "#F7AC25",
  },
});
