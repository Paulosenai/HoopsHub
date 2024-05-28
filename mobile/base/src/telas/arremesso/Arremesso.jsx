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
          text: 'ARREMESSO',
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
        <Text style={styles.titleCard}>Como Arremessar uma Bola de Basquete:</Text>
        </View>
        <Text style={styles.title}>Aprendendo a postura correta para o arremesso</Text>
                  <Image source={require("../../../res/img/drills/arremesso/treino1.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Mantenha os pés separados com a distância igual à dos ombros e levemente “soltos” do chão.</Text>
                  <Text style={styles.description}>Posicione o pé do arremesso (mesmo lado do braço dominante) à frente do outro, ambos virados para a cesta e na mesma largura.
                </Text>
                </View>
                
                  <Image source={require("../../../res/img/drills/arremesso/treino2.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>2 - Dobre levemente os joelhos. Deixar as pernas retas tira o equilíbrio no momento do lançamento; dobrá-las permitirá que o jogador pule logo que receber a bola.</Text>
                  <Text style={styles.description}>Treine para dominá-la e internalizá-la, tornando-a um movimento natural. No jogo, a rapidez e a postura correta são essenciais para um arremesso certeiro antes da marcação.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/arremesso/treino3.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>3 - Dê força ao arremesso dobrando mais os joelhos e quadris.</Text>
                  <Text style={styles.description}>Arremessos de longa distância exigem técnica apurada! A força deve vir da postura, não dos braços, para garantir precisão e naturalidade. Mantenha a postura equilibrada, flexionando mais quadris e joelhos e elevando levemente os calcanhares. Treine o movimento completo sem arremessar para aperfeiçoar a técnica.
                </Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.titleCard}>Parte 2 - Segurando a bola corretamente</Text>
                </View>
                  <Image source={require("../../../res/img/drills/arremesso/treino4.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Posicione a bola na lateral do corpo.</Text>
                  <Text style={styles.description}>Para um arremesso certeiro no basquete, domine a técnica do "shot pocket"! Segure a bola na lateral do corpo dominante, alguns centímetros acima da cintura, formando uma linha reta entre a bola, seu olho e a cesta. Evite segurar a bola muito alta ou baixa para garantir precisão. O "shot pocket" é o ponto de partida ideal para um arremesso vitorioso!
                </Text>
                </View>
                
                <Image source={require("../../../res/img/drills/arremesso/treino5.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>2 - Posicione o cotovelo de forma que ele fique em uma altura mais baixa que a bola, e não reto e para o lado.</Text>
                  <Text style={styles.description}>Aprenda a posicionar a bola dessa maneira sempre que se arrumar para realizar um arremesso. Quando outro jogador passar a bola para você, o ideal é que o passe seja feito um pouco acima da altura da cintura (o “shot pocket”); caso isso não aconteça, será necessário posicionar-se para fazer o arremesso, permitindo que a marcação chegue.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/arremesso/treino6.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>3 - Segure a bola corretamente.</Text>
                  <Text style={styles.description}>Para um arremesso preciso, posicione a mão dominante perpendicularmente às costuras da bola, usando as pontas dos dedos para impulsioná-la. A outra mão estabiliza a bola na lateral, guiando sua direção. Evite contato da palma da mão com a bola, controlando-a apenas com os dedos e polegar. Deixe um espaço entre a palma e a bola para um deslizamento suave durante o arremesso. Posicione a bola sobre as "almofadinhas" dos dedos bem abertos para maior controle.
                </Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.titleCard}>Parte 3 - Realizando o arremesso</Text>
                </View>
                  <Image source={require("../../../res/img/drills/arremesso/treino7.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Observe onde está a cesta.</Text>
                  <Text style={styles.description}>Para que a bola atinja o “alvo”, é necessário olhar para a cesta. Caso queira que a bola bata na tabela e entre, fique de olho no local da tabela em que a bola deverá atingir. Os olhos são parte fundamental de um bom arremesso no basquete; não fique olhando para a bola ou para a maneira que está posicionado.
                </Text>
                </View>
                
                <Image source={require("../../../res/img/drills/arremesso/treino8.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>2 - Pule e mantenha os joelhos retos.</Text>
                  <Text style={styles.description}>Use as pernas para dar mais impulso à bola, pulando para cima enquanto a mão dominante a arremessa. Mova as pernas, o tronco e os braços juntos, de forma coordenada, para arremessar com precisão.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/arremesso/treino9.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>3 - Pule um pouco para frente ao realizar o arremesso.</Text>
                  <Text style={styles.description}>O jogador não deve cair no mesmo local em que o arremesso foi feito, já que isso aplica muita tensão sobre os ombros e pescoço; isso não acontece ao pular para frente, além de dar um arco maior ao arremesso. Não se incline para frente durante o salto. Se o corpo estiver equilibrado, o pulo deve realizar um movimento natural, fazendo com que o arremesso seja bem mais preciso, equilibrado e natural.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/arremesso/treino10.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>4 - Empurre a bola para cima com a mão que fará o lançamento.</Text>
                  <Text style={styles.description}>À medida que os quadris estão ganhando impulso e você inicia o movimento do salto, a bola deve ir do “shot pocket” até a altura dos olhos em um só movimento fluido e suave. Os quadris subirão junto com o cotovelo, ao lançar a bola.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/arremesso/treino11.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>5 - Solte a bola.</Text>
                  <Text style={styles.description}>Um pouco antes de atingir o ponto mais alto do pulo, solte a bola com a mão do arremesso direcionada para a cesta. Deixe o cotovelo reto e aplique força com o punho, de forma que a bola ganhe um arco e não chegue à cesta em linha reta. 
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/arremesso/treino12.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>6 - Complete o movimento.</Text>
                  <Text style={styles.description}>Após a bola sair das mãos do jogador, é necessário finalizar o movimento de arremesso; ser incapaz de fazer isso tira muito da precisão do arremesso. Assim que a bola for lançada, a mão que a jogou deve dobrar e ficar apontada para baixo, finalizando o movimento de arremesso.
                </Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.titleCard}>Parte 4 - Aperfeiçoando a técnica</Text>
                </View>
                  <Image source={require("../../../res/img/drills/arremesso/treino13.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Desenvolva a “memória muscular”.</Text>
                  <Text style={styles.description}>No basquete, a rapidez é fundamental! Em quadra, não há tempo para pensar na mecânica do arremesso, principalmente sob pressão e com a marcação em cima. Por isso, é crucial treinar para que o arremesso, desde a postura até o lançamento, seja um movimento natural e automático.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/arremesso/treino14.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>2 - Treine lances livres.</Text>
                  <Text style={styles.description}>Os lances livres são cobrados da linha que está localizada a 4,5 m da cesta. É uma boa distância para se treinar os arremessos, além de geralmente permitir que a bola volte para você após um lançamento, evitando que seja necessário “persegui-la” a todo momento.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/arremesso/treino15.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>3 - Comece a usar a tabela.</Text>
                  <Text style={styles.description}>A tabela pode ser muito útil, especialmente nos arremessos de perto da cesta. Dependendo da posição em quadra, é necessário fazer com que a bola toque na tabela de diferentes formas. Ao estar no lado direito da quadra, por exemplo, o jogador precisa mirar no canto superior direito do quadrado na tabela; caso esteja no lado esquerdo, a bola deve atingir o canto superior esquerdo do quadrado.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/arremesso/treino16.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>4 - Treine simulando as situações de jogo.</Text>
                  <Text style={styles.description}>Aperfeiçoe o arremesso treinando sozinho, depois chame a galera para um jogo! Coletivos ou campeonatos te colocam em ação, simulando a pressão real de uma partida. Arremessar com adversários, pegar passes, controlar a bola e seguir as estratégias do time é bem diferente de treinar sozinho. Mas, com a técnica certa e "memória muscular", você será o cestinha do time!
                </Text>
                </View>
               </View>
      </ScrollView>
    </SafeAreaView>
  );
}
