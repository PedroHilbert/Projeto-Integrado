import { View, Text } from 'react-native';
import { styles } from './styles';
import UserPhoto from '../UserPhoto';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeHeader() {
  return (
    <>
      <View style={styles.cabecalho}>
        <View style={styles.nomeFoto}>
          <UserPhoto source={{ uri: 'https://github.com/abnercoolman.png' }} />
          <View style={styles.textoCabecalho}>
            <Text style={styles.textoCumprimento}>Olá,</Text>
            <Text style={styles.textoUsuario}>Abner</Text>
          </View>
        </View>
        <AntDesign name="logout" size={18} color="white" />
      </View>
    </>
  );
}
