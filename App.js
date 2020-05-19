import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Header from './src/componet/Header';

import Login from './src/componet/Login';
import Home from './src/componet/Home';

export default function App() {
  return (
    <View style={styles.container}>

    <Header title="Ajude-nos"/> 
      <TextInput
      style={styles.input}
      placeholder="Digite seu e-mail"         
      />
      <TextInput
      style={styles.input}
      secureTextEntry= {true}
      placeholder="Digite sua senha"      
      />
      <TouchableOpacity
      style={styles.botao}
      onPress={() => {this.props.navigation.navigate('Home')}}
      >
      <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#556b2f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    marginTop: 20,
    width: 350,
    padding: 10,
    backgroundColor:'#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius:9
    
  },
  botao:{
    width:200,
    height:42,
    backgroundColor: '#b8860b',
    marginTop:30,
    borderRadius:9,
    alignItems: "center",
    justifyContent: "center"
  }
});
