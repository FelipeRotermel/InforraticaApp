import { StyleSheet, Text, View, Image } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
        <Image style={styles.fundo} source={require('../assets/footer.png')} />
        <Text>Footer</Text>
        <View style={styles.logofundo}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 'none',
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 500,
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
});