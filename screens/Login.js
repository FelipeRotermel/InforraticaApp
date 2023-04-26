
import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logonome.png')} />
      <LinearGradient
          colors={['#212224', '#3b3c3d']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: '100%' }}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        /> 
        <TextInput
          style={styles.TextInput}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      <TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  TextInput: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: '7%',
    marginBottom: 20,
    textAlign: "center",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fff",
  },
  logo: {
    width: 300,
    height: 300,
    zIndex: 1,
  },
});

