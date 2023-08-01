import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../../components/Footer';

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
      <View style={styles.containerWithImage}>
        <View style={styles.designRight}></View>
        <View style={styles.designLeft}></View>
        <Image style={styles.image} source={require('../../assets/notebook.png')}></Image>
        <Text style={styles.subTitle}>Trabalhamos com:</Text>
      </View>
      <View style={styles.containerWithLogos}>
        <Image style={styles.logo} source={require('../../assets/logos/hp.png')}></Image>
        <Image style={styles.logo} source={require('../../assets/logos/asus.png')}></Image>
        <Image style={styles.logo} source={require('../../assets/logos/dell.png')}></Image>
        <Image style={styles.logo} source={require('../../assets/logos/sony.png')}></Image>
        <Image style={styles.logo} source={require('../../assets/logos/apple.png')}></Image>
        <Text>...</Text>
      </View>
      <View style={styles.containerWithText}>
        <Text style={styles.subTitle2}>Seu computador parou de funcionar?</Text>
        <Text style={styles.subText}>
          Consertamos computadores e notebooks de diversas marcas como Apple, Dell, HP, Sony, Acer, Lenovo, Asus, Toshiba, Samsung    entre outras! Nossos técnicos são profissionais experientes na solução dos mais diversos problemas de hardware.
        </Text>
        <Text style={styles.subTitle2}>Além disso!</Text>
        <Text style={styles.subText}>
          Nossos serviços também englobam a formatação e reinstalação de sistemas operacionais, recuperação de dados, limpeza interna e externa, troca de peças e componentes, instalação de programas e aplicativos, remoção de vírus e malwares, entre outros.
        </Text>
      </View>
    </View>
    <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212224',
    justifyContent: 'center',
  },
  containerWithImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerWithLogos: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerWithText: {
    paddingBottom: 90,
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
  image: {
    marginTop: '15%',
    width: 300,
    height: 200,
  },
  logo: {
    width: 80,
    height: 80,
    marginLeft: 5,
    marginRight: 5,
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
  subTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    paddingBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  subTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: '5%',
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
  subText: {
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
  designRight: {
    position: 'absolute',
    width: '40%',
    height: '55%',
    backgroundColor: 'transparent',
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 13,
    right: -10,
    top: '22%',
    zIndex: -1,
  },
  designLeft: {
    position: 'absolute',
    width: '40%',
    height: '55%',
    backgroundColor: 'transparent',
    borderColor: '#FFF',
    borderWidth: 2,
    borderRadius: 13,
    left: -10,
    top: '22%',
    zIndex: -1,
  },
});