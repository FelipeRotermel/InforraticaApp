import { useEffect, useState, useCallback } from 'react';
import { RefreshControl, StyleSheet, Text, View, LayoutAnimation, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms/auth';
import ordemServicoApi from '../../api/ordemServico';

export default function OrdemServico() {
  // const [expandedId, setExpandedId] = useState(null);
  const [ordensServico, setOrdensServico] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const currentUserState = useRecoilValue(userState);

  // const handlePress = (id) => {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //   if (expandedId === id) {
  //     setExpandedId(null);
  //   } else {
  //     setExpandedId(id);
  //   }
  // };
  const fetchOrdensServico = async () => {
    const data = await ordemServicoApi.buscarTodasAsOrdensServico();
    setOrdensServico(data);
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchOrdensServico();
    setRefreshing(false);
  }, []);
  useEffect(() => {
    fetchOrdensServico();
  }, []);


  return (
      <View style={styles.container}>
        {/* <LinearGradient
        colors={['#212224', '#3b3c3d']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, height: '100%' }}
        /> */}
  
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {ordensServico.map((ordem) => (
              // onPress={() => handlePress(ordem.id)} expanded={expandedId === ordem.id}
            <Card style={styles.card} key={ordem.id} >
              {/* <Image source={{ uri: ordem.computador.cover.url }} style={styles.image} /> */}
              <Card.Content>
                <Text style={styles.title}>{ordem.computador.gabinete}</Text>
                <Text style={styles.data}>Data de entrada: {ordem.data}</Text>
                <Text style={styles.status}>Status: {ordem.descricao}</Text>
              </Card.Content>
              <View style={[styles.cardContent, ]}>  
                <Text style={styles.textContent}>Placa mãe:
              <Text style={styles.internTextContent}> {ordem.computador.placa_mae}</Text>
            </Text>
            <Text style={styles.textContent}>Processador:
              <Text style={styles.internTextContent}> {ordem.computador.processador}</Text>
            </Text>
            <Text style={styles.textContent}>Memória RAM:
              <Text style={styles.internTextContent}> {ordem.computador.memoria_ram}</Text>
            </Text>
            <Text style={styles.textContent}>Placa de vídeo:
              <Text style={styles.internTextContent}> {ordem.computador.placa_de_video}</Text>
            </Text>
            <Text style={styles.textContent}>Armazenamento:
              <Text style={styles.internTextContent}> {ordem.computador.hd}</Text>
            </Text>
            <Text style={styles.textContent}>Fonte:
              <Text style={styles.internTextContent}>{ordem.computador.fonte}</Text>
            </Text>
              </View>
            </Card>
           ))}
           </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  flatlist: {
    marginTop: '10%',
    marginBottom: '10%',
    height: '100%', 
  },
  card: {
    width: '100%',
    height: 'auto',
    marginTop: '20%',
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'stretch',
    height: 300,
    width: 350,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  data: {
    marginTop: 5,
    fontSize: 15,
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
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
