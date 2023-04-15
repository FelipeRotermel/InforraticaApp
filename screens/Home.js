import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <LinearGradient
          colors={['#212224', '#3b3c3d']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: 500 }}
        />
      <Text style={styles.title}>Assistência técnica especializada em notebooks e computadores.</Text>
      <Text style={styles.text}>Aqui você encontra o melhor atendimento e o melhor preço.</Text>
      <Button icon="map" mode="contained" style={styles.button}><Text style={styles.colors}>Conheça-nos pessoalmente!</Text></Button>
      <View style={styles.container2}>
        <Image style={styles.imagem} source={require('../assets/notebook.png')}></Image>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212224',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colors: {
    color: '#FFF',
  },
  imagem: {
    width: 300,
    height: 300,
  },
  title: {
    position: 'relative',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 20,
    marginTop: '25%',
    width: 300,
  },
  text: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 30,
    marginTop: 30,
    width: 200,
  },
  button: {
    backgroundColor: 'blue',
    color: '#FFF',
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 15,
    width: 250,
  },
});