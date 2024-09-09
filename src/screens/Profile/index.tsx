import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import ScreenHeader from "../../components/ScreenHeader";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Profile() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <ScreenHeader title="Perfil" />
        </View>
        <ScrollView style={{ paddingTop: 40, paddingBottom: 16 }}>
          <View style={styles.containerColuna}>
            <View style={styles.containerLinha}>
              <View style={styles.coluna1}>
                <Image
                  source={{
                    uri: "https://github.com/abnercoolman.png",
                  }}
                  alt="Foto perfil do usuario"
                  style={styles.containerImage}
                />
                <TouchableOpacity style={styles.containerLinha1}>
                  <MaterialCommunityIcons
                    name="image-edit-outline"
                    size={24}
                    color="black"
                  />
                  <Text>Mudar foto</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.coluna2}>
                <Text style={styles.titulo1}>Abner Colman</Text>
                <Text style={styles.titulo2}>Empresa: Limão com Mel</Text>
                <Text style={styles.titulo3}>Gerente de RH</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.containerLinha1}>
              <MaterialIcons name="password" size={24} color="black" />
              <Text style={{ fontFamily: "Inter_500Medium", fontSize: 20 }}>
                Alterar senha
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.containerLinha1}>
              <MaterialCommunityIcons
                name="information-outline"
                size={24}
                color="black"
              />
              <Text style={{ fontFamily: "Inter_500Medium", fontSize: 20 }}>
                Sobre o aplicativo
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.botaoSair}>
          <MaterialIcons name="exit-to-app" size={24} color="black" />
          <Text style={{ fontFamily: "Inter_500Medium", fontSize: 20 }}>
            Sair do aplicativo
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
