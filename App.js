import {StatusBar} from 'expo-status-bar'
import {NavigationContainer} from '@react-navigation/native'
import AllExpenses from './screens/AllExpenses'
export default function App() {
  return (
    <>
    <StatusBar style="auto"/>
    <NavigationContainer>
    <AllExpenses />
    </NavigationContainer>
    </>
  );
}

