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
        <View style={styles.desenho}>
          <LinearGradient
          colors={['#03004f', '#0800eb']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: -1 }}
          style={{ flex: 1, borderRadius: 15}}
          />
        </View>
        <View style={styles.desenho2}></View>
        <View style={styles.desenho3}></View>
        <Image style={styles.imagem} source={require('../assets/notebook.png')}></Image>
        <Text style={styles.title2}>Trabalhamos com:</Text>
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
      <View>
        <Text style={styles.title3}>Seu computador parou de funcionar?</Text>
        <Text style={styles.text2}>
          Consertamos computadores e notebooks de diversas marcas como Apple, Dell, HP, Sony, Acer, Lenovo, Asus, Toshiba, Samsung    entre outras! Nossos técnicos são profissionais experientes na solução dos mais diversos problemas de hardware.
        </Text>
        <Text style={styles.title3}>Além disso!</Text>
        <Text style={styles.text2}>
          Nossos serviços também englobam a formatação e reinstalação de sistemas operacionais, recuperação de dados, limpeza interna e externa, troca de peças e componentes, instalação de programas e aplicativos, remoção de vírus e malwares, entre outros.
        </Text>
      </View>
      <View style={styles.footer}>
      </View>
      <View style={styles.footer2}></View>
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
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
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
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    paddingBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  title3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: '5%',
    width: '70%',
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
  text2: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: '5%',
    marginTop: '5%',
    width: '80%',
    marginBottom: '5%',
  },
  button: {
    backgroundColor: 'blue',
    color: '#FFF',
    marginLeft: '5%',
    marginTop: '5%',
    borderRadius: 15,
    width: '70%',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  desenho: {
    position: 'absolute',
    width: 300,
    height: 150,
    backgroundColor: 'rgba(94, 0, 200, 1)',
    borderRadius: 15,
    marginTop: '5%',
    zIndex: -1,
  },
  desenho2: {
    position: 'absolute',
    width: 300,
    height: 150,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 3,
    borderRadius: 15,
    marginTop: '10%',
    marginLeft: '5%',
    zIndex: -2,
  },
  desenho3: {
    position: 'absolute',
    width: 300,
    height: 150,
    backgroundColor: 'rgba(155, 0, 0, 0)',
    borderWidth: 3,
    borderRadius: 15,
    borderColor: '#FFF',
    marginLeft: '-5%',
    zIndex: -1,
  },
  footer: {
    width: '130%',
    marginLeft: '-15%',
    marginTop: '25%',
    height: 100,
    backgroundColor: 'green',
    transform: [{ rotate: "30deg" }],
  },
  footer2: {
    width: '100%',
    marginTop: '25%',
    height: 100,
    backgroundColor: 'green',
  },
});