import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import style from "./Styles";
import { Button } from 'galio-framework';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image style={style.logo} source={require("../../../res/img/logo.png")} />
      </View>
      <View>
        <Button style={style.button} onPress={() => navigation.navigate('Login')}>LOGIN</Button>

        <Button title='ENTRAR' style={style.secondaryButton} onPress={() => navigation.navigate('Register')}>CADASTRAR</Button>
        
        <Text style={style.text} onPress={() => navigation.navigate('Atualizar')}>Esqueceu a senha?</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
