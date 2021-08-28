import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import WelcomScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      {/*  <Stack.Screen name = "Register" component={}/> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
