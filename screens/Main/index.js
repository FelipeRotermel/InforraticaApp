import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ScrollView, StatusBar } from 'react-native';

import { userState } from '../../recoil/atoms/auth';

import LoginScreen from '../Login/index';
import OrdemServico from '../OrdemServico';
import Header from '../../components/Header';
import Home from '../Home';

const Stack = createNativeStackNavigator();

export default function Main() {
    const currentUserState = useRecoilValue(userState);
    const setUser = useSetRecoilState(userState);
  
    React.useEffect(() => {
      const bootstrapAsync = async () => {
        let access_token = null;
        try {
          access_token = await SecureStore.getItemAsync('access_token');
        } catch (e) {
          console.log(e);
        }
        if (access_token === null) {
          setUser({ access_token: null, loggedIn: false });
        } else {
          setUser({ access_token, loggedIn: true });
        }
      };
  
      bootstrapAsync();
    }, []);
  
  return (  
    <PaperProvider>
      <StatusBar backgroundColor="#212224" />
      <NavigationContainer>
        <Stack.Navigator>    
        {currentUserState.loggedIn ? (
        <>
          <Stack.Screen
            name="OrdemServico"
            component={OrdemServico}
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />,
            })}
          />
        </>
        ) : (
          <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} />,
          })}
          />
          )}    
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
