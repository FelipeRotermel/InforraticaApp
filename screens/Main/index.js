import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ScrollView, StatusBar } from 'react-native';

import OrdemServico from '../OrdemServico';
import Header from '../../components/Header';
import Home from '../Home';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (  
    <PaperProvider>
      <StatusBar backgroundColor="#212224" />
      <NavigationContainer>
        <Stack.Navigator>    
          <Stack.Screen 
            name="OrdemServico"
            component={OrdemServico}
            options={({ navigation }) => ({
              header: () => <Header navigation={navigation} />,
            })}
          />
        
        
          <Stack.Screen
          name="Header"
          component={Header}
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} />,
          })}
          />
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