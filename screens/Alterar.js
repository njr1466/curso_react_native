import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar, Button, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FlashMessage,{ showMessage } from "react-native-flash-message";


export default function AlterarScreen({ route, navigation }) {


    const [getNome, setNome] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getCpf, setCpf] = useState();
    const [getId, setId] = useState();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            const { cpf } = route.params;
            const { telefone } = route.params;
            const { id } = route.params;

            setNome(nome);
            setCpf(cpf);
            setTelefone(telefone);
            setId(id);
        }
    }, [])


    function alterarDados() {
        axios.put('http://professornilson.com/testeservico/clientes/' + getId, {
            nome: getNome,
            telefone: getTelefone,
            cpf: getCpf
        }).then(function (response) {
            showMessage({
                message: "Registro Alterado com Sucesso",
                type: "success",
              });
        }).catch(function (error) {
            console.log(error);
        });
    }

    function excluirDados() {
        axios.delete('http://professornilson.com/testeservico/clientes/' + getId).then(
            function (response) {
                showMessage({
                    message: "Registro Excluído com Sucesso",
                    type: "danger",
                  });
                
                setNome(null);
                setCpf(null);
                setTelefone(null);
                setId(null);
            }).catch(function (error) {
                console.log(error);
            });
    }
    return (
        <View style={{ alignItems: "center" }}>
            
            <Header
                leftComponent={<Button
                    title="<"
                    onPress={() => navigation.navigate('Listar')}
                />}
                centerComponent={{ text: 'Alterar Dados', style: { color: '#fff' } }}

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

            <Button title="Alterar"
                style={{ paddingTop: 20, width: 300 }}
                onPress={() => alterarDados()}
            ></Button>

            <Button title="Excluir"
                style={{ paddingTop: 20, width: 300 }}
                onPress={() => excluirDados()}
            ></Button>

<FlashMessage position="top" />
        </View>
    )
}

