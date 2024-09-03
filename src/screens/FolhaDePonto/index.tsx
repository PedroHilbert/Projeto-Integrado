import { useState } from "react";
import { SectionList, Text, View } from "react-native";
import { styles } from "./styles";
import ScreenHeader from "../../components/ScreenHeader";
import FolhaDePontoCard from "../../components/FolhaDePontoCard";

export default function FolhaDePonto() {
  const [nomeFuncionario, setNomeFuncionario] = useState([
    {
      title: "30.08.2024",
      data: [
        "Don Gordon",
        "John Steven Doe",
        "Barry Jhayson",
        "Tiwa Cavage",
        "James Williams",
        "Sarah Wilson ",
      ],
    },
    {
      title: "02.09.24",
      data: [
        "Don Gordon",
        "John Steven Doe",
        "Barry Jhayson",
      ],
    },
    {
      title: "03.09.24",
      data: [
        "Don Gordon",
        "Tiwa Cavage",
        "James Williams",
        "Sarah Wilson ",
      ],
    },
  ]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <ScreenHeader title="Folha de Ponto" />
        </View>
        <View style={styles.containerColuna}>
          <SectionList
            sections={nomeFuncionario}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <FolhaDePontoCard />}
            renderSectionHeader={({ section }) => (
              <Text style={styles.textoTituloSecao}>{section.title}</Text>
            )}
          />
        </View>
      </View>
    </>
  );
}
