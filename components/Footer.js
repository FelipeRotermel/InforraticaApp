import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';

export default function Footer() {
  return (
    <View style={styles.container}>
        <Image style={styles.fundo} source={require('../assets/footer.png')} />
        <View style={styles.logofundo}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <View style={styles.container2}>
            <Text style={styles.title}>Sobre a loja:</Text>
            <Text style={styles.text}>Inforratica é uma loja especializada em reparo de computadores e notebooks. Começamos nossa operação em 2023, com o objetivo de fornecer os melhores produtos e serviços de informática para nossos clientes. </Text>
            <Text style={styles.text}>Oferecemos serviços de manutenção e suporte técnico para garantir que nossos clientes possam desfrutar de uma experiência tranquila e sem problemas com seus equipamentos.</Text>
        </View>
        <View style={styles.container3}>
            <Text style={styles.title2}>Onde Estamos:</Text>
            <Button icon="map-marker" textColor='white' style={styles.button}>Rua dos Bobos, nº 0</Button>
            <Button textColor='white' style={styles.button}>Centro - São Paulo - SP</Button>
            <Button icon="store-marker-outline" textColor='white' style={styles.button}>CEP: 00000-000</Button>
        </View>
        <View style={styles.container3}>
            <Text style={styles.title2}>Contato:</Text>
            <Button icon="phone" textColor='white' style={styles.button}>(11) 0000-0000</Button>
            <Button icon="instagram" textColor='white' style={styles.button}>Instagram</Button>
        </View>
        <View style={styles.container4}>
            <Text style={styles.text3}>© 2021 Inforratica. Todos os direitos reservados.</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '100%',
    },
    container2: {
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: '5%',
    },
    container3: {
        backgroundColor: '#212224',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container4: {
        backgroundColor: '#3b3c3d',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 50,
    },
    fundo: {
        position: 'absolute',
        marginTop: '-3%',
        width: 600,
        height: 170,
    },
    logofundo: {
        width: 100,
        height: 100,
        backgroundColor: '#3b3c3d',
        borderRadius: 20,
        marginLeft: '-60%',
        marginTop: '-10%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    button: {
        color: '#FFF',
    },
    title: {
        color: '#3b3c3d',
        fontSize: 30,
        marginTop: '10%',
        marginLeft: '5%',
    },
    title2: {
        color: '#FFF',
        fontSize: 30,
        marginTop: '10%',
    },
    text: {
        color: '#3b3c3d',
        fontSize: 25,
        marginTop: '5%',
        marginLeft: '5%',
    },
    text2: {
        color: '#FFF',
        fontSize: 18,
        marginTop: '5%',
    },
    text3: {
        color: '#FFF',
        fontSize: 13,
    },
});