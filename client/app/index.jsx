 
import Login from "@/screens/auth/Login.js";
import Register from "@/screens/auth/Register.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      </Stack.Navigator>
  
  );
}
