import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function Header({ navigation }) {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" bg='dark'>
      <Container>
        <Navbar.Brand onClick={() => navigation.navigate('Home')}><img
              src="https://uploaddeimagens.com.br/images/004/428/170/full/logo.png?1681347921"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />INFORRATICA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item onClick={() => navigation.navigate('Login')}>
                <Text style={styles.button}>Login</Text>
            </Nav.Item>
            <Nav.Item onClick={() => navigation.navigate('OrdemServiço')}>
                <Text style={styles.button}>Ordem Serviço</Text>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
    }
});

export default Header;
