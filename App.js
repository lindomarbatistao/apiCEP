import axios from 'axios';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [uf, setUf] = useState('')

  const pesquisar = () => {
    axios.get('https://viacep.com.br/ws/' + cep + '/json')
      .then((res) => {
        console.log(res)
        setLogradouro(res.data.logradouro)
        setLocalidade(res.data.localidade)
        setBairro(res.data.bairro)
        setUf(res.data.uf)
      })
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='CEP'
        onChangeText={(e) => { setCep(e) }}
        style={styles.caixa}
      />

      <Button
        title='Ok'
        onPress={pesquisar}
      />

      <Text>{logradouro}</Text>
      <Text>{localidade}</Text>
      <Text>{bairro}</Text>
      <Text>{uf}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8
  }
});
