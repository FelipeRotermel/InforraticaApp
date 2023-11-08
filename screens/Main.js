import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ScrollView, StatusBar } from 'react-native';

import { userState } from '../recoil/atoms/auth'; 

import LoginScreen from './Login';
import OrdemServico from './OrdemServico';
import Header from '../components/Header';
import Home from './Home';


const Stack = createNativeStackNavigator();

export default function Main() {
  const setUser = useSetRecoilState(userState);
  const currentUserState = useRecoilValue(userState);

  const checkPreviousLoggedUser = async () => {
    const access = (await SecureStore.getItemAsync('access')) || null;
    const refresh = (await SecureStore.getItemAsync('refresh')) || null;
    if (access && refresh) {
      setUser({ loggedIn: true, access, refresh });
    }
  };

  React.useEffect(() => {
    checkPreviousLoggedUser();
  }, []);

  
  return (  
    <PaperProvider>
      <StatusBar backgroundColor="#212224" />
      <NavigationContainer>
  <Stack.Navigator initialRouteName={currentUserState.loggedIn ? "Home" : "Login"}>
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        header: () => <Header navigation={navigation} />
      })}
    />

    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={({ navigation }) => ({
        header: () => <Header navigation={navigation} />
      })}
    />

    <Stack.Screen
      name="OrdemServico"
      component={OrdemServico}
      options={({ navigation }) => ({
        header: () => <Header navigation={navigation} />
      })}
    />
  </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  
  );
          }
/* <Stack.Navigator>
            
            {currentUserState.loggedIn ? (
                <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />
                })}
              />
              ) : (
                <Stack.Screen name="Login" component={LoginScreen}
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />
                })}/>
              )
              ) : (
                <Stack.Screen name="OrdemServiço" component={OrdemServico} 
                options={({ navigation }) => ({
                  header: () => <Header navigation={navigation} />
                })}/>
              )
            }
              
</Stack.Navigator> */