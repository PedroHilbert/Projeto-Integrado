import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

import ScreenHeader from "../../components/ScreenHeader";

export default function CadastroFuncionarios() {

const [primeiroNome, setPrimeiroNome] = useState('');
const [sobrenome, setSobreNome] = useState('');
const [departamento, setDepartamento] = useState('');
const [cargo, setCargo] = useState('');
const [categoria, setCategoria] = useState('');
const [salario, setSalario] = useState('');

    return (
        <>
        <View style={styles.cabecalho}>
          <ScreenHeader title="Folha de Ponto" />
        </View>

        </>
    );
};