import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar, Button, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FlashMessage,{ showMessage } from "react-native-flash-message";


export default function ListaScreen({ route, navigation }) {


    const [getNome, setNome] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getCpf, setCpf] = useState();

    
      async function inserirDados() {
          await axios.post('http://professornilson.com/testeservico/clientes', {
                nome: getNome,
                telefone: getTelefone,
                cpf: getCpf
            }).then(function (response) {
                showMessage({
                    message: "Registro Salvo com Sucesso",
                    type: "success",
                  });
            }).catch(function (error) {
                console.log(error);
            });
        }
   

    return (
        <View style={{ alignItems: "center" }}>
            <Header
                leftComponent={<Button
                    title="<"
                    onPress={()=> navigation.navigate('Listar')}
                  />}
                centerComponent={{ text: 'Inserir Dados', style: { color: '#fff' } }}
                
            />

            <Text>Digite seu Nome</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setNome(text)}
                value={getNome}
            />

            <Text>Digite seu Telefone</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setTelefone(text)}
                value={getTelefone}
            />

            <Text>Digite seu Cpf</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setCpf(text)}
                value={getCpf}
            />

            <Button title="Salvar Dados"
            style={{paddingTop:20, width:300}}
                onPress={()=> inserirDados()}
            ></Button>
            <FlashMessage position="top" />
        </View>
    )
}

