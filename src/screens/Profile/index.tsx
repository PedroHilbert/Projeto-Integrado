import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Profile() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>Profile</Text>
        </View>
      </View>
    </>
  );
}
