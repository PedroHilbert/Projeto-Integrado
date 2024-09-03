import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerButtonOn: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 96,
    height: 33,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 0.75,
    borderColor: "#F7AC25",
    marginRight: 5,
  },
  containerButtonOff: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 96,
    height: 33,
    backgroundColor: "#4B93E7",
    borderRadius: 8,
    marginRight: 5,
  },
  textoButtonOn: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    color: "#F7AC25",
  },
  textoButtonOff: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    color: "#FFFFFF",
  },
});
