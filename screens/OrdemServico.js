import React, { useState } from "react";
import { StyleSheet, Text, View, LayoutAnimation, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function OrdemServico() {

  const [expanded, setExpanded] = useState(false);
  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['#212224', '#3b3c3d']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: '100%' }}
        />
      <Card style={styles.card} onPress={handlePress} expanded={expanded}>
        <Card.Cover style={styles.image} source={{ uri: 'https://www.tech-stallion.com/assets/examples/mid.jpg' }} />
        <Card.Content>
          <Text style={styles.title}>Seu Computador</Text>
          <View style={[styles.cardContent, { height: expanded ? null : 0, overflow: 'hidden' }]}>
            <Text style={styles.textContent}>Placa mãe</Text>
            
          </View>
          <TouchableOpacity style={styles.bottomThing}>
            <Text style={styles.content}>Ver mais</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover style={styles.image} source={{ uri: 'https://www.tech-stallion.com/assets/examples/mid.jpg' }} />
        <Card.Content>
          <Text style={styles.title}>Nome do PC</Text>
          <View style={[styles.cardContent,]}>
            <Text style={styles.textContent}>Peças do pc</Text>
            <Text style={styles.textContent}>Peças que serão trocadas</Text>
            <Text style={styles.textContent}>Data de entrada / Data de retirada</Text>
            <Text style={styles.textContent}>Valor do orçamento</Text>
          </View>
          <TouchableOpacity style={styles.bottomThing}>
            <Text style={styles.content}>Ver mais</Text>
            <Text style={styles.content}>Estado</Text>
          </TouchableOpacity>
          
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    width: '47%',
    height: '40%',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: '15%',
  },
  image: {
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    backgroundColor: '#fff',
    height: 'auto',
    width: '100%',
    marginTop: 10,
  },
  content: {
    fontSize: 15,
  },
  textContent: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomThing: {
    top: '60%',
    flexDirection: 'row',
  },
 
});