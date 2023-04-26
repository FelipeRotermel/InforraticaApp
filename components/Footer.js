import { StyleSheet, Text, View, Image } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
        <Image style={styles.fundo} source={require('../assets/footer.png')} />
        <View>
            <Text>Footer</Text>
            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 'none',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    fundo: {
        marginTop: '-3%',
        width: 600,
        height: 600,
    },
    logo: {
        position: "absolute",
        width: 100,
        height: 100,
        marginTop: '-100%',
    },
});