import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [dado1, setDado1] = useState(1); 
  const [dado2, setDado2] = useState(1); 
  const [vencedor, setVencedor] = useState('');
  const [placarJogador1, setPlacarJogador1] = useState(0); 
  const [placarJogador2, setPlacarJogador2] = useState(0); 

  const jogarDados = () => {
    const novoDado1 = Math.floor(Math.random() * 6) + 1; 
    const novoDado2 = Math.floor(Math.random() * 6) + 1;

    setDado1(novoDado1);
    setDado2(novoDado2);

    if (novoDado1 > novoDado2) {
      setVencedor('Jogador 1');
      setPlacarJogador1((prev) => prev + 1); 
    } else if (novoDado2 > novoDado1) {
      setVencedor('Jogador 2');
      setPlacarJogador2((prev) => prev + 1); 
    } else {
      setVencedor('Empate');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo de Dados</Text>
      <Text style={styles.subtitle}>Vencedor: {vencedor}</Text>

      <View style={styles.dadosContainer}>
        <Image source={getDadoImage(dado1)} style={styles.dado} />
        <Image source={getDadoImage(dado2)} style={styles.dado} />
      </View>

      <View style={styles.placarContainer}>
        <Text style={styles.placarText}>Jogador 1: {placarJogador1}</Text>
        <Text style={styles.placarText}>Jogador 2: {placarJogador2}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={jogarDados}>
        <Text style={styles.buttonText}>Jogar os Dados</Text>
      </TouchableOpacity>
    </View>
  );
}

const getDadoImage = (numero) => {
  switch (numero) {
    case 1:
      return require('./assets/dice1.png');
    case 2:
      return require('./assets/dice2.png');
    case 3:
      return require('./assets/dice3.png');
    case 4:
      return require('./assets/dice4.png');
    case 5:
      return require('./assets/dice5.png');
    case 6:
      return require('./assets/dice6.png');
    default:
      return require('./assets/dice1.png');
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  dadosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  dado: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  placarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  placarText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#673AB7',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
