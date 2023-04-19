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
        <ScrollView horizontal pagingEnabled style={styles.scroll}>
        <Image style={styles.logo} source={require('../assets/logos/hp.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/asus.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/dell.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/sony.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/apple.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/acer.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/lenovo.png')}></Image>
        <Image style={styles.logo} source={require('../assets/logos/toshiba.png')}></Image>
        </ScrollView>
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
  scroll: {
    backgroundColor: '#FFF',
  },
  colors: {
    color: '#FFF',
  },
  imagem: {
    marginTop: '15%',
    width: 300,
    height: 200,
  },
  logo: {
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    position: 'relative',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: '5%',
    marginTop: '20%',
    width: '70%',
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    paddingBottom: 30,
  },
  text: {
    position: 'relative',
    fontSize: 25,
    color: '#FFF',
    marginLeft: 20,
    marginTop: '5%',
    marginLeft: '8%',
    width: '50%',
  },
  button: {
    backgroundColor: 'blue',
    color: '#FFF',
    marginLeft: '5%',
    marginTop: '5%',
    borderRadius: 15,
    width: '70%',
  },
});