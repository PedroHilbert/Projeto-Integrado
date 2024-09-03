import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function FolhaDePonto() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>Folha de Ponto</Text>
        </View>
      </View>
    </>
  );
}
