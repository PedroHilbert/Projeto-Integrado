import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/index";
import Profile from "../screens/Profile/index";
import FolhaDePonto from "../screens/FolhaDePonto/index";
import CadastroFuncionarios from '../screens/CadastroFuncionarios/index';

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Funcionario from "../screens/Funcionario";

type AppRoutes = {
  home: undefined;
  profile: undefined;
  folhaDePonto: undefined;
  funcionario: undefined;
  cadastroFuncionarios: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#F7AC25",
        tabBarInactiveTintColor: "#CFD8DC",
        tabBarStyle: {
          backgroundColor: "#082777",
          borderTopWidth: 0,
          borderTopStartRadius: 12,
          borderTopEndRadius: 12,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="folhaDePonto"
        component={FolhaDePonto}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timetable" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="funcionario"
        component={Funcionario}
        options={{ 
          tabBarButton: () => null }}
      />
      <Screen
        name="cadastroFuncionarios"
        component={CadastroFuncionarios}
        options={{ 
          tabBarButton: () => null 
        }}
      />
    </Navigator>
  );
}
