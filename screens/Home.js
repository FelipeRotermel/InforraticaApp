import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <LinearGradient
          colors={['#212224', '#3b3c3d', '#212224']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: '100%' }}
        />
      <Text style={styles.title}>Assistência técnica especializada em notebooks e computadores.</Text>
      <Text style={styles.text}>Aqui você encontra o melhor atendimento e o melhor preço.</Text>
      <Button icon="map" mode="contained" style={styles.button}><Text style={styles.colors}>Conheça-nos pessoalmente!</Text></Button>
      <View style={styles.container2}>
        <Image style={styles.imagem} source={require('../assets/notebook.png')}></Image>
        <Text style={styles.title2}>Nossos parceiros:</Text>
      </View>
      <View style={styles.container3}>
        <Image style={styles.logo} source={require('../assets/logos/hp.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/hp.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/hp.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/hp.png')}></Image>
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
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colors: {
    color: '#FFF',
  },
  imagem: {
    marginTop: 100,
    width: 300,
    height: 200,
  },
  logo: {
    width: 75,
    height: 75,
    marginLeft: 10,
    marginRight: 10,
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
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  text: {
    position: 'relative',
    fontSize: 20,
    color: '#FFF',
    marginLeft: 20,
    marginTop: 20,
    marginLeft: 30,
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