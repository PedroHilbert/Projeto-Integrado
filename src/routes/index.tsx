import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = "#ffffff";

  return (
    <NavigationContainer theme={theme}>
      <AuthRoutes />
      {/*<AppRoutes />*/}
    </NavigationContainer>
  );
}
