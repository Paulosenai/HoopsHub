import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import imagemFundo from '../../../../res/img/papel-de-parede-3d-top.jpeg'

export default function ListaAlunos(){

    const [aluno, setAluno] = useState([]);
{/*Lista de dados externos*/}
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setAluno(json))

    },[]);

    console.log(aluno);


{/*Lista de dados locais*/}
    const alunos = [
        {id: '1', nome:'Matheus', ra:'123456', idade:'17'},
        {id: '2', nome:'Ruam', ra:'654321', idade:'32'},
        {id: '3', nome:'Juan', ra:'234568', idade:'58'},
        {id: '4', nome:'Paulo', ra:'784621', idade:'22'},
        {id: '5', nome:'Kaique', ra:'652314', idade:'44'},
        {id: '6', nome:'Vitor', ra:'985612', idade:'33'},
    ];

    const ExibirAlunos = ({item}) => (
        <TouchableOpacity>
            <View style={{backgroundColor:'#ffffff72', padding: 10}}>
                <Text style={{color:'red'}}>{item.nome}</Text>
            </View>
        </TouchableOpacity>
    );
    
    return(
        <SafeAreaView>
            <ImageBackground style = {{height:'100%'}} source={imagemFundo}>
                <FlatList
                data={aluno}
                 keyExtractor={item => item.id}
                renderItem={ExibirAlunos}    
            />
            </ImageBackground>
        </SafeAreaView>

    );
};

