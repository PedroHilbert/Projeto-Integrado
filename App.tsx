import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes/index';
import {
  Inter_900Black,
  Inter_800ExtraBold,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_300Light,
  Inter_200ExtraLight,
  Inter_100Thin,
} from '@expo-google-fonts/inter';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsloaded] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
    Inter_200ExtraLight,
    Inter_100Thin,
  });

  return (
    <>
      {fontsloaded ? (
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}
