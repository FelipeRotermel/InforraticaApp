import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Main from './screens/Main';
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import RecoilNexus from 'recoil-nexus';

export default function App() {
  
  return (
    <RecoilRoot>
      <RecoilNexus />
      <Main />
      <StatusBar style="auto" />
    </RecoilRoot>
  );
}
