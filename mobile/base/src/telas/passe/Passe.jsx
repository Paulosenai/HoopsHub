import React from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text, Header } from '@rneui/themed';
import styles from "./Styles";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.scrollview}>
      <Header
        backgroundColor="black"
        barStyle="light-content"
        centerComponent={{
          text: 'PASSE',
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
        rightComponent={{
          icon: 'person',
          color: '#fff',
        }}
      />
      <ScrollView>

      <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.titleCard}>Tipos de passe no Basquete:</Text>
        </View>
                <Text style={styles.titleContent}>1 -  Passe de peito</Text>
                  <Image source={require("../../../res/img/drills/passe/passedepeito.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Como o nome indica, com a bola à altura do peito esta é arremessada frontalmente na direcção do alvo. Neste movimento os polegares é que darão a força ao passe e as palmas das mãos deverão apontar para fora no final do gesto técnico.
                </Text>
                </View>
                <View style={styles.content}>
                </View>
                <Text style={styles.titleContent}>2 - Passe Picado</Text>
                  <Image source={require("../../../res/img/drills/passe/passepicado.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Muito semelhante ao passe de peito, tendo em conta que o alvo inicial é o solo; O ressalto da bola terá um objectivo comum ao do passe de peito, isto é, a mão alvo do colega ou as zonas próximas do peito.
                </Text>
                </View>
                <Text style={styles.titleContent}>3 - Passe sobre a cabeça</Text>
                <Image source={require("../../../res/img/drills/passe/passedeombro.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Mantenha os punhos flexionados e os polegares atrás da bola. Esta posição deixa a bola protegida caso algum marcador pressione você. Assim como na técnica do passe comum, dê um passo a frente para se equilibrar ao mandar a bola para seu companheiro de equipe.
                </Text>
                </View>
                <Text style={styles.titleContent}>4 - Passe de ombro</Text>
                <Image source={require("../../../res/img/drills/passe/passecomamao.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O jogador leva a bola por cima do ombro, segurando-a com ambas as mãos, com o pé contrário ao do braço que está realizando o movimento, na frente. Depois estica o braço, lança a bola e termina o movimento com uma flexão de punho.
                </Text>
                </View>
                
                 
                
               </View>

      </ScrollView>
    </SafeAreaView>
  );
}
