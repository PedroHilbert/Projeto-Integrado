import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { AppNavigatorRoutesProps } from "../../routes/app.routes";

import { styles } from "./styles";
import HomeHeader from "../../components/HomeHeader";
import Group from "../../components/Group";
import FuncionarioCard from "../../components/FuncionarioCard";

export default function Home() {
  const [deptFuncionario, setDeptFuncionario] = useState([
    "Design UI/UX",
    "DevOps",
    "Front-End",
    "Back-End",
    "Gerência",
  ]);

  const [nomeFuncionario, setNomeFuncionario] = useState([
    "Don Gordon",
    "John Steven Doe",
    "Barry Jhayson",
    "Tiwa Cavage",
    "James Williams",
    "Sarah Wilson ",
  ]);

  const [deptFuncionarioSelected, setDeptFuncionarioSelected] =
    useState("Design UI/UX");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenFuncionarioDetails() {
    navigation.navigate("funcionario");
  }

  return (
    <>
      <View style={styles.container}>
        <HomeHeader />
        <FlatList
          data={deptFuncionario}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={deptFuncionarioSelected === item}
              onPress={() => setDeptFuncionarioSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          style={{
            marginTop: 20,
            marginBottom: 10,
            maxHeight: 44,
            minHeight: 44,
          }}
        />

        <View style={styles.containerColuna}>
          <Text style={styles.textoTitulo1}>Funcionários</Text>
          <FlatList
            data={nomeFuncionario}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <FuncionarioCard onPress={handleOpenFuncionarioDetails} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}
