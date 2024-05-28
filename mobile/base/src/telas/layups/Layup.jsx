import React from "react";
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Text, Header } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from "./Style";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.scrollview}>
      <Header
        backgroundColor="black"
        barStyle="light-content"
        centerComponent={{
          text: 'Layup',
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
        <Text style={styles.titleCard}>Como Fazer uma Layup (Bandeja):</Text>
        </View>
        <Text style={styles.title}>Bandeja com a mão direita</Text>
                  <Image source={require("../../../res/img/drills/layup/treino1.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>Bata a bola perto da cesta utilizando a mão direita.</Text>
                  <Text style={styles.description}>Como você fará a bandeja com esta mão, ataque o lado direito da cesta. É necessário chegar perto o suficiente para conseguir realizar o arremesso sem perigo de que ele seja curto demais, mas aproximar-se demais ou você acabará diretamente embaixo dela.
                </Text>
                </View>
                
                  <Image source={require("../../../res/img/drills/layup/treino2.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>2 - Aproxime-se da cesta e dê um passo na direção dela com o pé direito.</Text>
                  <Text style={styles.description}>Ele é importante para aproximar e posicionar-se da melhor maneira para um bom arremesso. Bata a bola uma última vez perto do pé direito.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/layup/treino3.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>3 - Tome impulso com o pé esquerdo.</Text>
                  <Text style={styles.description}>Logo que ele tocar o chão, utilize-o para ganhar impulso na direção da cesta. Seu corpo deve estar se movendo na direção do aro, mas não incline-se para frente. O ideal é posicionar-se perto o suficiente da cesta de maneira que você salte reto para completar a bandeja. Ao pular, prenda a bola junto ao seu peito (ou seja, não a bata mais) e prepare-se para fazer o arremesso.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/layup/treino4.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>4 - Arremesse com o braço direito ao erguer a perna do mesmo lado.</Text>
                  <Text style={styles.description}>Enquanto pula, imagine que um cordão está preso ao seu braço e perna do lado direito. Mova-os ao mesmo tempo que arremessa, como se alguém estivesse puxando o cordão para cima. Sua perna direita deve estar dobrada e apontada na direção da cesta enquanto o braço do mesmo lado é erguido para realizar a bandeja, sendo dobrado no mesmo sentido do aro. Arremesse com o cotovelo levemente dobrado, de maneira que seu braço pareça o pescoço de um cisne.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/layup/treino5.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>5 - Mire o "sweet spot" da tabela.</Text>
                  <Text style={styles.description}>Uma das razões pelas quais a bandeja é a melhor opção para marcar é devido ao uso da tabela para que o arremesso entre facilmente na cesta. Ao realizar uma bandeja com a mão direita, o "sweet spot", ou seja, o "ponto certo" para fazer a cesta, é um pouco à direita do quadrado no centro da tabela. Este ponto absorve o impacto da bola e faz com que ela passe corretamente pelo aro.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/layup/treino6.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>6 - Treine até que seus músculos "memorizem" o movimento.</Text>
                  <Text style={styles.description}>A bandeja é um arremesso fundamental do basquete e que deve tornar-se automático após praticá-lo bastante. Você deve chegar ao ponto em que seu corpo já "lembra" o que deve fazer, não sendo nem necessário pensar aonde seus pés devem ir ou qual mão é mais adequada à situação; o movimento é feito naturalmente. Faça bandejas como parte de seu treino diário.
                </Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.titleCard}>Parte 2 - Bandeja com a mão esquerda</Text>
                </View>
                  <Image source={require("../../../res/img/drills/layup/treino7.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Repita os mesmos movimentos da Parte 1.</Text>
                  <Text style={styles.description}>Para fazer uma bandeja com a mão esquerda repita os mesmos passos da parte 1. Caso seja destro, a bandeja com a mão esquerda também pode ser denominada "bandeja reversa" em relação ao movimento normal. Caso seja canhoto, a bandeja com a mão direita é a reversa. É complicado realizar esta cesta com sua mão "ruim", mas vale muito o esforço em aperfeiçoar mais este movimento ao seu arsenal.
                </Text>
                </View>
                </View>
                
                
      </ScrollView>
    </SafeAreaView>
  );
}
