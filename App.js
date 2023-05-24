import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil'; //Instale recoil com npm install recoil
import Main from './screens/Main';

export default function App() {
  return (
    <RecoilRoot>
      <Main />
      <StatusBar style="auto" />
    </RecoilRoot>
  );
}
