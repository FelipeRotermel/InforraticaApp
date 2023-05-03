
import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logonome.png')} />
      <LinearGradient
          colors={['#212224', '#3b3c3d']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: '100%', zIndex: -1 }}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        /> 
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.TextInputPassword}
            placeholder="Senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons
              style={styles.showPassword}
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={24}
              color="grey"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotButton}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity> 
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: '7%',
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 20,
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  TextInput: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: '7%',
    marginBottom: 20,
    textAlign: "center",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  TextInputPassword: {
    width: "100%",
    height: '100%',
    textAlign: "center",
    borderRadius: 30,
  },
  loginButton: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fff",
  },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: -12,
  },
  logo: {
    width: 300,
    height: 300,
    zIndex: 1,
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
  },
  forgotButton: {
    color: "#1d4ef0",
  },
});

