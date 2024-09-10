import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Autenticar from "../../components/Autenticar/index";
import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

export default function SignIn() {
    const authNavigation = useNavigation<AuthNavigatorRoutesProps>();
    const appNavigation = useNavigation<AppNavigatorRoutesProps>();

    const handleGoSignUp = () => {
        authNavigation.navigate("signup");
    };

    // const handleGoHome = () => {
    //     appNavigation.navigate("home");
    // };

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [resultado, setResultado] = useState("");
    const [isSelectedCheckBox, setSelectionCheckBox] = useState(false);
    const [autenticado, setAutenticado] = useState(true);

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

                    <View style={styles.toggleLogin}>
                        <Text style={styles.toggleTextOn}>Login</Text>
                        <View style={styles.verticalLine} />
                        <TouchableOpacity onPress={handleGoSignUp}>
                            <Text style={styles.toggleTextOff}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>

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
                            setResultado("");
                            setCarregando(true);
                            await new Promise((r) => setTimeout(r, 2000));
                            setCarregando(false);
                            if (usuario === "mobile" && senha === "12345") {
                                setResultado("Usuário autenticado");
                                setAutenticado(true);
                                await new Promise((r) => setTimeout(r, 2000));
                                appNavigation.navigate("home");
                            } else {
                                setResultado("Usário não autenticado");
                                setAutenticado(false);
                            }
                        }}
                    >
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
