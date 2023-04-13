import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import First from "./components/First";
import Second from "./components/Second";

/*
1. npm install react-native-reanimated@1 --save --save-exact
2. npm install @react-navigation/native-stack
3. npm install @react-navigation/drawer
4. npx expo install react-native-gesture-handler react-native-reanimated
*/

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="First Name" component={First} />
      <Drawer.Screen name="Second Name" component={Second} />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DrawerScreen" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}