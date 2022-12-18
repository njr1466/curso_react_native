
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar,Button, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';



export default function ListaScreen({route,navigation}){

    const [list, setList] = useState([]);
 
    useEffect(()=>{
        
        async function resgatarDados(){
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
              );
              setList(result.data);
        }
        resgatarDados();
    })

    return(
        <View>
             <Header
            
            centerComponent={{ text: 'Lista', style: { color: '#fff', fontSize:20 } }}
            rightComponent={
                <Button  
                title="+"
                onPress={()=>navigation.navigate('Cadastrar')}
                ></Button>}
   />
            <ScrollView>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"}} />
              <ListItem.Content>
                <ListItem.Title>{l.nome}</ListItem.Title>
                <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
        </ScrollView>
      </View>
    )
}
