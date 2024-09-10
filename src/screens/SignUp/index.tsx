import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Autenticar from "../../components/Autenticar/index";
import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";
import Cadastrar from "../../components/Cadastrar";

export default function SignUp() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const handleGoSignIn = () => {
        navigation.navigate("signin");
    };

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [senhaConfirmarVisivel, setConfirmarSenhaVisivel] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [resultado, setResultado] = useState('');
    const [autenticado, setAutenticado] = useState(true);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <Text style={styles.textoCabecalho}>Cariri RH</Text>
                </View>

                <View style={styles.conteudo}>
                    <Text style={styles.textoTitulo}>Cariri RH</Text>

                    <View style={styles.toggleLogin}>
                        <TouchableOpacity onPress={handleGoSignIn}>
                            <Text style={styles.toggleTextOff}>Login</Text>
                        </TouchableOpacity>
                        <View style={styles.verticalLine} />
                        <Text style={styles.toggleTextOn}>Cadastrar</Text>
                    </View>

                    <Cadastrar
                        nomeUsuario={nomeUsuario}
                        setNomeUsuario={setNomeUsuario}
                        usuario={usuario}
                        setUsuario={setUsuario}
                        senha={senha}
                        setSenha={setSenha}
                        senhaVisivel={senhaVisivel}
                        setSenhaVisivel={setSenhaVisivel}
                        senhaConfirmarVisivel={senhaConfirmarVisivel}
                        setConfirmarSenhaVisivel={setConfirmarSenhaVisivel}
                    />

                    {/* ####### LINHA "OU" E BOTÕES ####### */}

                    {/* ####### LINHA "OU" ####### */}

                    <View style={styles.anotherOption}>
                        <View style={styles.horizontalLine} />
                        <Text style={styles.label}>ou</Text>
                        <View style={styles.horizontalLine} />
                    </View>
                    {/*Botão Cadastrar*/}
                    <TouchableOpacity>
                        <View style={styles.buttonEntrar}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.buttonGoogle}>
                            <Text style={styles.textButton}>Cadastrar com</Text>
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
                            }
                        >
                            {resultado}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}
