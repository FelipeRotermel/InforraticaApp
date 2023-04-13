import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login';
import OrdemServico from './screens/OrdemServico';
import Header from './components/Header';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  )
}