import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ScrollView } from 'react-native';
import Login from './screens/Login';
import OrdemServico from './screens/OrdemServico';
import Header from './components/Header';
import Home from './screens/Home';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />
            })}
          />
          <Stack.Screen name="Login" component={Login}
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />
            })}/>
          <Stack.Screen name="OrdemServiço" component={OrdemServico} 
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />
            })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
