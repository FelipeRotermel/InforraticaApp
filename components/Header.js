import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Header({ navigation }) {

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.navbar}>
        <Image onPress={() => navigation.navigate('Home')} source={require('../assets/logo.png')} style={{ width: 45, height: 45 }}/>
        <Appbar.Content
          title="INFORRATICA" color="white"
          onPress={() => navigation.navigate('Home')}
        />
        <Appbar.Action style={styles.colors} icon="account" color='white' 
          onPress={() => navigation.navigate('Login')}/>
          
        <Appbar.Action style={styles.colors} icon="pc" color='white' 
          onPress={() => navigation.navigate('OrdemServiço')}/>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="dots-vertical" color="white" onPress={openMenu} />
          }>
          <Menu.Item onPress={() => navigation.navigate('OrdemServiço')} title="Ordens de servico" />
          <Menu.Item onPress={() => navigation.navigate('Home')} title="Sobre" />
        </Menu>
        <LinearGradient
          colors={['red', 'green', 'blue']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 60, height: 5 }}
        />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  colors: {
    color: '#FFF',
  },
  navbar: {
    backgroundColor: '#212224',
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
