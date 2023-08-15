import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, LayoutAnimation, ScrollView, FlatList, Image } from 'react-native'; // Importe o componente Image
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import ComputadoresApi from '../../api/computador';

export default function OrdemServico() {
  const [expanded, setExpanded] = useState(false);
  const [computadores, setComputadores] = useState([]);

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  useEffect(() => {
    async function fetchComputadores() {
      const computadoresData = await new ComputadoresApi().buscarTodosOsComputadores();
      setComputadores(computadoresData);
    }
    fetchComputadores();
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

        {}
        <FlatList
          data={computadores}
          keyExtractor={(computador) => computador.id.toString()}
          renderItem={({ item }) => (
            <Card style={styles.card} onPress={handlePress} expanded={expanded}>
              {}
              <Image source={{ uri: item.imagem }} style={styles.image} />
              <Card.Content>
                <Text style={styles.title}>{item.gabinete}</Text>
                <Text style={styles.status}>Status: {item.placa_mae}</Text>
                {}
              </Card.Content>
              <View style={[styles.cardContent, { height: expanded ? null : 0, overflow: 'hidden' }]}>
            <Text style={styles.textContent}>Placa mãe:
              <Text style={styles.internTextContent}> {item.placa_mae}</Text>
            </Text>
            <Text style={styles.textContent}>Processador:
              <Text style={styles.internTextContent}> {item.processador}</Text>
            </Text>
            <Text style={styles.textContent}>Memória RAM:
              <Text style={styles.internTextContent}> {item.memoria_ram}</Text>
            </Text>
            <Text style={styles.textContent}>Placa de vídeo:
              <Text style={styles.internTextContent}> {item.placa_de_video}</Text>
            </Text>
            <Text style={styles.textContent}>Armazenamento:
              <Text style={styles.internTextContent}> {item.hd}</Text>
            </Text>
            <Text style={styles.textContent}>Fonte:
              <Text style={styles.internTextContent}>{item.fonte}</Text>
            </Text>
          </View>
            </Card>
          )}
        />
      </View>
    </ScrollView>
  );
}

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
