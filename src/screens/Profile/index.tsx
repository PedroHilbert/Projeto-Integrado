import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import ScreenHeader from "../../components/ScreenHeader";

export default function Profile() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <ScreenHeader title="Perfil" />
        </View>
        <View style={styles.containerColuna}></View>
      </View>
    </>
  );
}
