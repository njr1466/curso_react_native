import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InicialScreen({ navigation, route }) {

    const [quantidade, setquantidade] = useState(0);
    const [nome, setnome] = useState(0);

    useEffect(() => {
        if (route.params) {
            const { quantidade } = route.params ;
            const { nome } = route.params ;
            
            setquantidade(quantidade);
            setnome(nome);
        }
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{nome}</Text>
            <Button
                onPress={() => navigation.navigate('Home')}
                title="Tela Home"
            />
            <Text>Quantidade enviada: {quantidade}</Text>
        </View>
    );
}