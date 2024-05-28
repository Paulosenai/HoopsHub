import React, { useState } from "react";
import { Image, SafeAreaView, View, Alert} from "react-native";
import { Input, Text,} from '@rneui/themed';
import { Button } from 'galio-framework';
import styles from "./Styles";
import axios from 'axios';

const Login = ({navigation}) =>{
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
      try{
          //Verificar se os campos foram preenchidos
          if(!email || !senha){
              Alert.alert('Erro', 'Por favor, preencha todos os campos!');
              return
          }

          //Objeto para enviar para a API 
          const data = {
              email:email,
              senha:senha
          }

          //Enviar os dados para a API
          const response = await axios.post('http://10.0.2.2:8085/api/validate', data);

          //Verificar se o login foi efetuado com sucesso
          if(response.status === 200){
              setEmail('');
              setSenha('');
              navigation.navigate('Inicio');
          }
          else{
              Alert.alert('Erro', 'Email ou senha incorretos por favor tente novamente')
          }
      }
      catch(error){
          if(error.response && error.status === 401){
             
              Alert.alert('Erro', 'Ocorreu um erro ao fazer o login, por favor, tente novamente')
          }
          else{
              console.log(error)
              Alert.alert('Erro', 'Email ou senha incorretos. Por favor tente novamente')
          }
      }
  };

  return (
    
      <SafeAreaView style={styles.container}>
      <View>
        <Text h1 style={styles.textBall}>HOOPSHUB</Text>
        <Image style={styles.backgroundbola} source={require("../../../res/img/bolas-de-basquete.jpg")} />
      </View>

      <View style={styles.fundo}>
        <View>
          <Text h4 style={styles.tittle}>Digite o seu email:</Text>
          <Input
            placeholder='Email:'
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            color="white"
          />
          <Text h4 style={styles.tittle}>Digite a sua senha:</Text>
          <Input
            placeholder='Senha:'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            color="white"
          />

          <View style={styles.botao}>
            {/* colocar a fonte em negrito */}
            <Button title='ENTRAR' style={styles.buttonReg} onPress={() => 
              navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Button>

            <Button title="Entrar" color='red' onPress={handleLogin} style={styles.buttonCont}>
            <Text style={styles.buttonText}>Entrar</Text>
            </Button>
          </View>

        </View>
      </View>

      <View>
        <Image style={styles.imgLogo} source={require("../../../res/img/logo.png")} />
       
      </View>
      </SafeAreaView>
  );
}

export default Login;