import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import Percussion from "./components/Percussion";
import Wind from "./components/Wind";
import { StyleSheet, Image } from "react-native";

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
      <Drawer.Screen name="Percussion Instruments" component={Percussion} />
      <Drawer.Screen name="Wind Instruments" component={Wind} />
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