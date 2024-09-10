import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import UserPhoto from "../UserPhoto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useNavigation } from "@react-navigation/native";

export default function HomeHeader() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenPerfil = () => {
    navigation.navigate("profile");
  };

  return (
    <>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={handleOpenPerfil}>
          <View style={styles.nomeFoto}>
            <UserPhoto
              source={{ uri: "https://github.com/abnercoolman.png" }}
            />
            <View style={styles.textoCabecalho}>
              <Text style={styles.textoCumprimento}>Olá,</Text>
              <Text style={styles.textoUsuario}>Abner</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="exit-to-app" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}
