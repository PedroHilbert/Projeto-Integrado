import { View, TextInput, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { styles } from './styles';

export default function Cadastrar({
  senha,
  setSenha,
  senhaVisivel,
  setSenhaVisivel,
  senhaConfirmarVisivel,
  setConfirmarSenhaVisivel,
}) {
  return (
    <View style={styles.campoEntrada}>
      {/* Campo de entrada de texto - Somente em cadastro*/}
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputEmail}
            placeholder="Nome"
            placeholderTextColor="#4B93E7"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputEmail}
            placeholder="Sobrenome"
            placeholderTextColor="#4B93E7"
          />
        </View>
      </>

      {/* ############# SENHA ############# */}
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="default"
          style={styles.inputEmail}
          placeholder="Senha"
          placeholderTextColor="#4B93E7"
          secureTextEntry={!senhaVisivel}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <>
            {senhaVisivel ? (
              <Feather name="eye" size={15} color="#4B93E7" />
            ) : (
              <Feather name="eye-off" size={15} color="#4B93E7" />
            )}
          </>
        </TouchableOpacity>
      </View>

      {/* Campo de confirmação de senha */}
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="default"
          style={styles.inputEmail}
          placeholder="Confirmar Senha"
          placeholderTextColor="#4B93E7"
          secureTextEntry={!senhaConfirmarVisivel}
        />
        <TouchableOpacity
          onPress={() => setConfirmarSenhaVisivel(!senhaConfirmarVisivel)}>
          <>
            {senhaVisivel ? (
              <Feather name="eye" size={15} color="#4B93E7" />
            ) : (
              <Feather name="eye-off" size={15} color="#4B93E7" />
            )}
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
}
