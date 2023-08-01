import React, { useState, useEffect  } from "react";
import { StyleSheet, Text, View, LayoutAnimation, ScrollView, FlatList  } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import ClientesApi from '../../api/cliente';

export default function OrdemServico() {
  const [expanded, setExpanded] = useState(false);
  const [clientes, setClientes] = useState([]);

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  // Utilizando useEffect para buscar os clientes ao carregar o componente
  useEffect(() => {
    async function fetchClientes() {
      const clientesData = await new ClientesApi().buscarTodosOsClientes();
      setClientes(clientesData);
    }
    fetchClientes();
  }, []);

  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#212224', '#3b3c3d']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: '100%' }}
        />

        {/* Utilizando FlatList para exibir a lista de clientes */}
        <FlatList
          data={clientes}
          keyExtractor={(cliente) => cliente.id.toString()}
          renderItem={({ item }) => ( // Corrigindo para usar 'item' em vez de 'cliente'
            <Card style={styles.card} onPress={handlePress} expanded={expanded}>
              {item.nome}
              <Card.Content>
                <Text style={styles.title}>{item.nome}</Text>
                <Text style={styles.status}>Status: {item.status}</Text>
                {/* Outras informações do cliente que você deseja exibir */}
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  ScrollView: {
    flex: 1,
    backgroundColor: '#3b3c3d',
    height: '100%',
  },
  card: {
    width: '90%',
    height: 'auto',
    marginTop: '20%',
    borderRadius: 13,
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'stretch',
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    marginTop: 5,
    fontSize: 15,
    color: '#ff0000',
  },
  cardText: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardContent: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    height: 'auto',
    width: '100%',
  },
  content: {
    fontSize: 15,
  },
  textContent: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  internTextContent: {
    fontWeight: 'normal',
  },
});