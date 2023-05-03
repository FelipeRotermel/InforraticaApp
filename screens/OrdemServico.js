import React, { useState } from "react";
import { StyleSheet, Text, View, LayoutAnimation, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function OrdemServico() {

  const [expanded, setExpanded] = useState(false);
  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <ScrollView style={styles.ScrollView}>
    <View style={styles.container}>
      <LinearGradient
          colors={['#212224', '#3b3c3d']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: '100%' }}
        />
      <Card style={styles.card} onPress={handlePress} expanded={expanded}>
        <Card.Cover style={styles.image} source={{ uri: 'https://www.tech-stallion.com/assets/examples/mid.jpg' }} />
        <View style={styles.cardText}>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>Aigo DarkFlash</Text>
            <Text style={styles.status}>Aguardando peça</Text>
          </View>
          <View style={[styles.cardContent, { height: expanded ? null : 0, overflow: 'hidden' }]}>
            <Text style={styles.textContent}>Placa mãe:
              <Text style={styles.internTextContent}> MSI H310M Pro-VDH Plus</Text>
            </Text>
            <Text style={styles.textContent}>Processador:
              <Text style={styles.internTextContent}> Intel Core i5-9400F</Text>
            </Text>
            <Text style={styles.textContent}>Memória RAM:
              <Text style={styles.internTextContent}> 2x Kingston HyperX Fury 8GB 2666MHz DDR4</Text>
            </Text>
            <Text style={styles.textContent}>Placa de vídeo:
              <Text style={styles.internTextContent}> MSI GeForce GTX 1660 Ti Gaming X 6GB</Text>
            </Text>
            <Text style={styles.textContent}>Armazenamento:
              <Text style={styles.internTextContent}> SSD Kingston A400 240GB</Text>
            </Text>
            <Text style={styles.textContent}>Fonte:
              <Text style={styles.internTextContent}> Corsair CX550 550W 80 Plus Bronze</Text>
            </Text>
          </View>
        </View>
      </Card>
      <Card style={styles.card} onPress={handlePress} expanded={expanded}>
        <Card.Cover style={styles.image} source={{ uri: 'https://www.tech-stallion.com/assets/examples/budget.jpg' }} />
        <View style={styles.cardText}>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>NZXT H210i</Text>
            <Text style={styles.status}>Aguardando peça</Text>
          </View>
          <View style={[styles.cardContent, { height: expanded ? null : 0, overflow: 'hidden' }]}>
            <Text style={styles.textContent}>Placa mãe:
              <Text style={styles.internTextContent}> MSI B550 MAG</Text>
            </Text>
            <Text style={styles.textContent}>Processador:
              <Text style={styles.internTextContent}> Ryzen 5 5600X</Text>
            </Text>
            <Text style={styles.textContent}>Memória RAM:
              <Text style={styles.internTextContent}> 2x Corsair Vengeance Pro 16gb 3200Mhz</Text>
            </Text>
            <Text style={styles.textContent}>Placa de vídeo:
              <Text style={styles.internTextContent}> Palit RTX 3060 Ti</Text>
            </Text>
            <Text style={styles.textContent}>Armazenamento:
              <Text style={styles.internTextContent}> Sabrent Rocket 1TB NVMe M.2</Text>
            </Text>
            <Text style={styles.textContent}>Fonte:
              <Text style={styles.internTextContent}> Corsair TX750M</Text>
            </Text>
          </View>
        </View>
      </Card>
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