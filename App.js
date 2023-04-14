import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';

import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ButtonIcon from "./components/UI/ButtonIcon";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
    screenOptions={{
      headerRight: () => <ButtonIcon icon="add" size={24} color='black' onPress={() =>{}}/>
    
    }}
    >
      <BottomTabs.Screen 
      name="RecentExpenses" 
      component={RecentExpenses} 
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color,size}) => <Ionicons  name="hourglass" size={size} color={color}/>
        }}
      />
      <BottomTabs.Screen 
      name="AllExpenses" 
      component={AllExpenses}
      options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({color,size}) => <Ionicons  name="card-outline" size={size} color={color}/>
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
