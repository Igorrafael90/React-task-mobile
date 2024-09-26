import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Text, View, ScrollView, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const[alcool, setalcool] = useState( )
  const[gasolina, setgasolina] = useState( )
  const[result, setresult] = useState()
  const[response, setresponse] = useState( )

  function resultado(){
    resultado = (Number(alcool) / Number(gasolina))
    setresult(resultado)
    if(result > 0.7){
      setresponse('gasolina')
    }else{
      setresponse('alcool')
    }
  }

  return (
      <View
      style={styles.container}
      >
        <Text style={{
          color: '#ffffff',
        }}>Insira os dados</Text>
        <TextInput
          keyboardType='numeric'
          onChangeText={(e) => setgasolina(e)}
          style={styles.texts}
         placeholder='Digite o preço da gasolina'
         ></TextInput>
         <TextInput
          keyboardType='numeric'
          onChangeText={(e) => setalcool(e)}
          style={styles.texts}
         placeholder='Digite o preço do alcool'
         ></TextInput>
         <TouchableOpacity style={styles.butao} onPress={resultado} ><Text>Calcule</Text></TouchableOpacity>
         <Text style={{
          color: '#ffffff',
        }}
        >O valor é: {result}</Text>
         <Text style={{
          color: '#ffffff',
        }}
        >A melhor opção é: {response}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#404143',
  },

  texts: {
    backgroundColor:'#ffffff',
    borderRadius: 5,
    margin: 5,
    width: 200,
    borderColor:'#000000',
    borderWidth:1,
  },

  butao:{
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    width: 150,
    height: 30,
    backgroundColor: 'red',
  }
})