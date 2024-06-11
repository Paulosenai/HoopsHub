import React from "react";
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Text, Header } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from "./Styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.scrollview}>
      <Header
        backgroundColor="black"
        barStyle="light-content"
        centerComponent={{
          text: 'DRIBLES',
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
        <Text style={styles.titleCard}>Como Realizar Dribles de Basquete:</Text>
        </View>
        <Text style={styles.title}>Como Bater a Bola por baixo das Pernas no Basquete</Text>
                  <Image source={require("../../../res/img/drills/dribles/cbb1.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Agache-se flexionando os joelhos e abaixando os quadris.</Text>
                  <Text style={styles.description}>Para controlar a bola ao passá-la entre as pernas, você deverá adotar a postura básica para batê-la; abaixe-se e curve um pouco as costas. Incline-se um pouco para frente para preparar-se, no caso de precisar retomar o movimento; a postura deverá passar uma sensação de estabilidade.
                </Text>
                </View>
                
                  <Image source={require("../../../res/img/drills/dribles/cbb2.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>2 - Erga a cabeça e o peito e olhe bem para frente.</Text>
                  <Text style={styles.description}>Ficar de cabeça baixa atrapalhará o seu equilíbrio e não será possível ver companheiros e adversários na quadra. Ao inclinar-se para frente, coloque o peito também mais para frente para não se sentir tentado a olhar para a bola. Deixe o olhar direcionado à cesta.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/dribles/cbb3.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>3 - Equilibre-se com a parte dos pés que ligam a planta aos dedos para estar sempre preparado para mover-se.</Text>
                  <Text style={styles.description}>Incline-se para frente com os dedos dos pés para transferir o peso do corpo para a parte dianteira dos pés; não se mexa muito para frente ou poderá acabar perdendo o equilíbrio. Ao sentir os calcanhares saindo do chão, abaixe-os um pouco para ter maior estabilidade; é uma posição que permitirá com que se mova mais rapidamente e conseguir mudar de direção sem dificuldade ao correr pela quadra.
                </Text>
                </View>
                <Image source={require("../../../res/img/drills/dribles/cbb4.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>4 - Bata bola parado usando apenas a ponta dos dedos.</Text>
                  <Text style={styles.description}>Use a mão boa e fique batendo bola, mantendo-a perto do corpo e do joelho; em vez de colocar a palma da mão sobre a bola, aplique força para baixo apenas com a ponta dos dedos. O joelho dará um pouco de proteção contra marcadores “carrapatos”, enquanto a ponta dos dedos dá maior controle sobre a direção da bola.
                </Text>
                </View>
                <Image source={require("../../../res/img/drills/dribles/cbb5.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>5 - Use força suficiente para bater a bola na altura do joelho. </Text>
                  <Text style={styles.description}>A altura máxima que ela pode chegar – para protegê-la melhor do adversário – ainda não deve ser muito longe do chão. Enquanto agachado, o ideal é que a bola não passe da altura de suas coxas; caso ela atinja a altura perto de sua cintura, será muito mais difícil de mantê-la sobre sua posse. Quanto mais alto ela chegar, mais chance os marcadores terão de roubá-la antes de conseguir passá-la por entre as pernas.[5]X
                </Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.titleCard}>Parte 2 - Fazendo um crossover</Text>
                </View>
                  <Image source={require("../../../res/img/drills/dribles/co1.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Bata bola com a mão dominante.</Text>
                  <Text style={styles.description}>Fique com os joelhos dobrados, separados mais ou menos pela distância entre os ombros e não se esqueça de levantar a cabeça e o peito, como se estivesse de olho nos marcadores. Bata bola em um ritmo constante, mantendo-a baixa e perto do seu corpo.
                </Text>
                </View>
                
                <Image source={require("../../../res/img/drills/dribles/co2.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>2 - Coloque a mão boa na bola de forma que o polegar fique na parte superior.</Text>
                  <Text style={styles.description}> Aguarde-a quicar até a altura dos joelhos e, antes de chegar, mude a posição da mão para a lateral. Vire-a de maneira que a parte superior do polegar esteja levemente apontada para o céu. Depois de colocar a ponta do polegar sobre ela, controle a bola encostando os outros dedos na lateral.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/dribles/co3.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>3 - Bata a bola e já faça com que ela mude para a outra mão. </Text>
                  <Text style={styles.description}>Depois de fazê-la quicar no mesmo lugar, prepare-se para mudá-la para a outra mão, mirando no ponto do chão bem na frente do seu corpo. Use a ponta dos dedos e jogue a bola naquele ponto; ela quicará em um ângulo que possibilitará o controle com a outra mão.
                </Text>
                </View>
                <Image source={require("../../../res/img/drills/dribles/co4.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>4 - Coloque a outra mão sobre a bola para controlá-la. </Text>
                  <Text style={styles.description}>No entanto, não encoste a palma da mão, já que continuará batendo bola. É importante adquirir o hábito de deixar a bola tocar na ponta dos dedos; imediatamente, aplique força para continuar batendo-a na altura do joelho.
                </Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.titleCard}>Parte 3 - Fazendo o crossover entre as pernas</Text>
                </View>
                  <Image source={require("../../../res/img/drills/dribles/cop1.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Bata bola com a mão dominante.</Text>
                  <Text style={styles.description}>Primeiro, agache-se para ficar na posição certa, perto do chão para conseguir controlar a bola. Levante o peito e a cabeça ao bater a bola perto do pé.
                </Text>
                </View>
                
                <Image source={require("../../../res/img/drills/dribles/cop2.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>2 - Dê um passo grande na diagonal e para frente com o pé oposto. </Text>
                  <Text style={styles.description}>Mova a perna em um ângulo de 45° na direção contrária ao corpo; enquanto faz isso, o lado dominante deverá se manter estável, com o pé plantado no chão. Continue batendo bola perto dele para se preparar para o crossover.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/dribles/cop3.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>3 - Leve a mão para a lateral da bola à medida que ela quica. </Text>
                  <Text style={styles.description}>Ela deve fazer um movimento até que o polegar chegue à parte superior da bola; já esteja preparado para aplicar força com a ponta dos dedos. A “almofadinha” do polegar deverá ir até a parte superior da bola, enquanto os outros dedos ficam na lateral; assim que ela atingir o ápice do quique – mais ou menos na altura dos joelhos – esteja pronto para passá-la por entre suas pernas. 
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/dribles/cop4.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>4 - Aplique força para que a bola passe entre as pernas, iniciando o crossover.</Text>
                  <Text style={styles.description}>Ela deverá quicar na parte do chão bem embaixo do corpo; depois, com a ponta dos dedos, faça força para que a bola atinja aquele lugar. É importante que ela ganhe impulsão suficiente para fazer o “V”, obtendo um arco e voltando na altura do joelho do outro lado.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/dribles/cop5.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>5 - Assim que a bola estiver na ascendente, prepare a mão oposta para controlá-la.</Text>
                  <Text style={styles.description}>Abaixe a mão para que chegue perto das pernas e imediatamente “colar” a bola nela, deixando que atinja a ponta dos dedos. Enquanto a bola estiver realizando a trajetória, abaixe a mão que está na frente para proteger a bola; um defensor mais alerta pode conseguir dar um toque nela entre suas pernas, se não tomar cuidado. 
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/dribles/cop6.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>6 - Mude o posicionamento dando um passo para frente com a perna de trás.</Text>
                  <Text style={styles.description}>Essa é a parte mais complicada do crossover entre as pernas: saber a hora certa de ir para frente. Assim que sentir a bola atingindo sua mão, mova o pé dominante para frente; o ângulo deverá ser de 45° e na mesma direção do início do crossover. A bola ficará protegida e será possível fazer o crossover ao mesmo tempo que anda para frente. 
                </Text>
                </View>
                <Image source={require("../../../res/img/drills/dribles/cop7.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>7 - Continue batendo bola e avançando pela quadra.  </Text>
                  <Text style={styles.description}>Vá na direção em que deu o passo durante o crossover entre as pernas, mantendo o corpo entre a bola e o marcador. Quando precisar mudar de direção mais uma vez, repita os passos para fazer o crossover de volta para a mão oposta. Treine o controle de bola para deixar os defensores para trás e atacar a cesta!
                </Text>
                </View>

                <View style={styles.content}>
                  <Text style={styles.titleCard}>Parte 4 - Por trás das costas (sem quicar a bola)</Text>
                </View>
                  <Image source={require("../../../res/img/drills/dribles/pc1.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Bata a bola com a mão direita..</Text>
                </View>

                <Image source={require("../../../res/img/drills/dribles/pc2.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>2 - Quando a bola estiver prestes a chegar em sua mão, posicione-a de forma que você toque a bola não na parte superior, mas sim no lado oposto à você, à direita.</Text>
                  <Text style={styles.description}>A bola deve ficar mais na palma da mão que o normal e mais perto ao seu braço.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/dribles/pc3.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>3 - No momento em que a bola chegar à sua mão, mexa o braço no sentido horário em volta do seu corpo, com a bola ainda em sua mão.</Text>
                  <Text style={styles.description}>Sua mão pode ter que agarrar a bola um pouco embaixo dela, mas não o suficiente para constituir a violação de carregar a bola.
                </Text>
                </View>

                <Image source={require("../../../res/img/drills/dribles/pc4.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>4 - Quando a bola estiver perto do seu quadril esquerdo, a bola deve ir para frente de forma natural, saindo da ponta dos seus dedos, quicando à sua frente.</Text>
                </View>
               </View>
               <Image source={require("../../../res/img/drills/dribles/pc5.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>5 - Continue batendo a bola.</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.titleCard}>Parte 5 - Passando a bola por baixo do joelho</Text>
                </View>
                <Image source={require("../../../res/img/drills/dribles/pc3.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.titleContent}>1 - Bata bola com a mão esquerda ou direita, qual for a melhor, e depois passe a bola por baixo do seu joelho dobrado, e pegue com a mão oposta.</Text>
                </View>
      </ScrollView>
    </SafeAreaView>
  );
}
