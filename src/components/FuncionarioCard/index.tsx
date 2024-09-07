import { ComponentProps } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";

type Props = ComponentProps<typeof Image> &
    ComponentProps<typeof TouchableOpacity>;

export default function FuncionarioCard({ source, onPress, ...rest }: Props) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} {...rest}>
            <View style={styles.horizontal}>
                <Image
                    style={styles.image}
                    source={require("./../../assets/images/foto_01_dashboard_principal.png")}
                />
                <View style={styles.vertical}>
                    <Text style={styles.textoTitulo1}>Don Gordon</Text>
                    <Text style={styles.textoTitulo2}>Designer UI/UX</Text>
                </View>
            </View>
            <AntDesign name="right" size={24} color="#071C50" />
        </TouchableOpacity>
    );
}
