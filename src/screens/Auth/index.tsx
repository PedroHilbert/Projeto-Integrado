import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Autenticar from '../../components/Autenticar/index';
import Cadastrar from '../../components/Cadastrar/index';

export default function Auth() {
  const [isLoginSelected, setIsLoginSelected] = useState(true);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senhaConfirmarVisivel, setConfirmarSenhaVisivel] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [resultado, setResultado] = useState('');
  const [isSelectedCheckBox, setSelectionCheckBox] = useState(false);
  const [autenticado, setAutenticado] = useState(true);

  const handleToggleLoginOnOff = () => {
    setIsLoginSelected(!isLoginSelected);
  };

  const handleToggleShowPass = () => {
    setSelectionCheckBox(!isSelectedCheckBox);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>Cariri RH</Text>
        </View>

        <View style={styles.conteudo}>
          <Text style={styles.textoTitulo}>Cariri RH</Text>

          {/* ####### TOGGLE - "AUTENTICAR" || "CADASTRAR" */}
          <View style={styles.toggleLogin}>
            <TouchableOpacity onPress={handleToggleLoginOnOff}>
              <Text
                style={
                  isLoginSelected ? styles.toggleTextOn : styles.toggleTextOff
                }>
                Login
              </Text>
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TouchableOpacity onPress={handleToggleLoginOnOff}>
              <Text
                style={
                  isLoginSelected ? styles.toggleTextOff : styles.toggleTextOn
                }>
                Cadastrar
              </Text>
            </TouchableOpacity>
          </View>

          {/* ####### RENDERIZAÇÃO CONDICIONAL - COMPONENTES "AUTENTICAR" || "CADASTRAR" ####### */}
          {isLoginSelected ? (
            <Autenticar
              usuario={usuario}
              senha={senha}
              setUsuario={setUsuario}
              setSenha={setSenha}
              senhaVisivel={senhaVisivel}
              setSenhaVisivel={setSenhaVisivel}
              isSelectedCheckBox={isSelectedCheckBox}
              handleToggleShowPass={handleToggleShowPass}
            />
          ) : (
            <Cadastrar
              senha={senha}
              setSenha={setSenha}
              senhaVisivel={senhaVisivel}
              setSenhaVisivel={setSenhaVisivel}
              senhaConfirmarVisivel={senhaConfirmarVisivel}
              setConfirmarSenhaVisivel={setConfirmarSenhaVisivel}
            />
          )}

          {/* ####### LINHA "OU" E BOTÕES ####### */}

          {/* ####### LINHA "OU" ####### */}

          <View style={styles.anotherOption}>
            <View style={styles.horizontalLine} />
            <Text style={styles.label}>ou</Text>
            <View style={styles.horizontalLine} />
          </View>
          {/*Botão Entrar*/}
          <TouchableOpacity
            onPress={async () => {
              setResultado('');
              setCarregando(true);
              await new Promise((r) => setTimeout(r, 2000));
              setCarregando(false);
              if (usuario === 'mobile' && senha === '12345') {
                setResultado('Usuário autenticado');
                setAutenticado(true);
              } else {
                setResultado('Usário não autenticado');
                setAutenticado(false);
              }
            }}>
            <View style={styles.buttonEntrar}>
              <Text style={styles.textButton}>Entrar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.buttonGoogle}>
              <Text style={styles.textButton}>Entrar com</Text>
              <AntDesign
                name="google"
                size={16}
                weight="light"
                color="#FFFFFF"
              />
            </View>
          </TouchableOpacity>
          <View style={styles.resultadoAutenticacao}>
            <ActivityIndicator animating={carregando} color="#F7AC25" />
            <Text
              style={
                autenticado ? styles.textAutenticado : styles.textNaoAutenticado
              }>
              {resultado}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
