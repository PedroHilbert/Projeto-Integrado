import { Text, View, StyleSheet, Button, ScrollView } from "react-native"; 

import { useState } from "react";

import { TextInput } from 'react-native-paper';

import ScreenHeader from "../../components/ScreenHeader";

export default function CadastroFuncionarios() {

const [primeiroNome, setPrimeiroNome] = useState('');
const [sobrenome, setSobreNome] = useState('');
const [departamento, setDepartamento] = useState('');
const [cargo, setCargo] = useState('');
const [categoria, setCategoria] = useState('');
const [salario, setSalario] = useState('');

    return (
        <View >
          <View style={styles.cabecalho}> </View>

            <Text style={styles.TituloSecao}> ADICIONAR FUNCIONÁRIO </Text>

          <View style={styles.styleInput}>
            <TextInput
              mode="outlined"
              label="Primeiro nome"
              placeholder="Digite seu Primeiro Nome"
              onChangeText={setPrimeiroNome}
              autoCompleteType="name"
             />

             <TextInput
              mode="outlined"
              label="Sobrenome"
              placeholder="Digite seu SobreNome"
              onChangeText={setSobreNome}
              autoCompleteType="nome"
             />
            
            <TextInput
              mode="outlined"
              label="Departamento"
              placeholder="Departamento do seu colaborador"
              onChangeText={setDepartamento}
            />

            <TextInput
              mode="outlined"
              label="Cargo"
              placeholder="Digite o Cargo"
              onChangeText={setCargo}
            />

            <TextInput
              mode="outlined"
              label="Categoria"
              placeholder="Digite a Categoria"
              onChangeText={setCategoria}
            />

            <TextInput
              mode="outlined"
              label="Salario"
              placeholder="Digite o Salario"
              onChangeText={setSalario}
              keyboardType="numeric"
            />

          </View>

          <View> 

            <Button 
              title="Confirmar"
            />

          </View>
        </View>
    );
}

const styles = StyleSheet.create({
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

      TituloSecao: {
        fontSize: 18,
        fontFamily: "Poppins",
        paddingTop: 20,
        fontWeight: 'bold',
        color: "#071C50",
      },

      styleInput: {
        justifyContent: 'center',
        padding: 20,
  
      },

}
);