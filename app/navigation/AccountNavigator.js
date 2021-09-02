import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack  = createStackNavigator()

const AccountNavigator = () => {


    return (

        <Stack.Navigator> 
            <Stack.Screen  name="Account" component={AccountScreen}/>
            <Stack.Screen  name="Listings" component={ListingsScreen}/>

        </Stack.Navigator>
    )
}

export default AccountNavigator