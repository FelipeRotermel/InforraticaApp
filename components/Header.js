import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native-web';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" fixed="top" className='color-white' variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /><Text style={styles.title}>INFORRATICA</Text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#login">Iniciar Sessão</Nav.Link>
            <Nav.Link href="#ordemservico">Ordens de serviço</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'white',
    },
});