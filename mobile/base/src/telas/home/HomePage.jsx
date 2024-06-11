import React, {useState , useEffect} from "react";
import {  View, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList, Form, Input } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Header,} from '@rneui/themed';
import styles from "./Styles";
import axios from 'axios'


export default function Home({ route}) {

const navigation = useNavigation()

  const Sidebar = ({ isOpen, onClose }) => {
    const navigation = useNavigation();
    const navigateToScreen = (screenName) => {
      navigation.navigate(screenName);
      onClose(); 
  };

    return (
      <View style={[styles.sidebarContainer, { transform: [{ translateX: isOpen ? 0 : -300 }] }]}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>

      <View style={styles.sidebarContent}>
        <Text style={styles.sidebarTitle}>Login</Text>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => 
              navigation.navigate('Login')}>
          <Text style={styles.sidebarItemText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => 
              navigation.navigate('Register')}>
          <Text style={styles.sidebarItemText}>Registrar</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const renderGameOTE = (team1Logo, team2Logo, time, subtitle, score) => (
    <View style={styles.gameContainerOTE}>
      <View style={styles.gameItemOTE}>
        <Image source={team1Logo} style={styles.teamLogo} />
        <View>
        <Text style={styles.timeTextOTE}>{time}</Text>
        <Text style={styles.subtitle}>{subtitle}{"\n"}</Text>
        <Text  style={styles.ScoreText}>{score}</Text>
        </View>
        <Image source={team2Logo} style={styles.teamLogo} />
      </View>
    </View>
  );

  const [data, setData] = useState([]);
  
      useEffect(()=>{
          axios.get(`http://10.0.2.2:8085/api/readNews`)
          .then(response =>{
              //Ordenar os dados pelo id em ordem crescente
              const sortData= response.data.sort((a,b) => a.id - b.id);
              setData(sortData);
  
          })
          .catch(error => {
              console.log(JSON.stringify(error));
          });
          console.log(data)
      },[]);

      const handleVizualizar = (id) =>{
        navigation.navigate('Noticias', {id})
    };
      
      const renderItem = ({item})=> (
        <View style={styles.item}> 
               <View style={styles.card}>
                  <Image source={require("../../../res/img/Nba/playoffsCard.jpg")} 
                  style={styles.image} />
                  <View style={styles.content}>
                  <TouchableOpacity onPress={()=> handleVizualizar(item.id)}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  </TouchableOpacity>
                </View>
               </View>
        </View> 
    );

    return (
      <SafeAreaView style={styles.container}>
      
        <Header
          backgroundColor="black"
          barStyle="light-content"
          centerComponent={{
            text: 'HoopsHub',
            style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
          }}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: toggleSidebar // Adiciona onPress para abrir/fechar a barra lateral
          }}
          rightComponent={{ 
            icon: 'person', 
            color: '#fff',
            onPress: toggleSidebar}}
            
        />
       <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
       
          <ScrollView>
                 {/* Notícias */}
                <View style={styles.section}>
                    <View style={styles.newsCard}>
                        <ImageBackground
                            source={require("../../../res/img/Nba/nbaplayoff.jpg")} 
                            style={styles.newsImage}
                        >
                        </ImageBackground>
                        <View style={styles.newsContent}>
                            <Text style={styles.textContent}> Com o fim da temporada regular da NBA, é chegada a hora dos {'\n'} playoffs. As 16 melhores equipes da liga finalmente estão definidas.</Text>
                        </View>
                    </View>

                    <View style={styles.sectionOTE}>
                      <Text style={styles.sectionTitleOTE}>Rodada dos PlayOffs</Text>
                      <View style={styles.gamesContainer}>
                        {renderGameOTE(
                          require('../../../res/img//Nba/celtics-removebg-preview.png'),
                          require('../../../res/img/Nba/Miami_Heat_logo.svg.png'),
                          'ROUND 5',
                          'Best of 4',  
                          '4-1',  
                        )}
                      </View> 
                      </View> 
                </View>

                 <FlatList
                   data={data}
                   renderItem={renderItem}
                   keyExtractor={item => String(item.id)}
                   />
             
               <View style={styles.sectionOTE}>         
                      <View style={styles.gamesContainer}>
                        {renderGameOTE(
                          require('../../../res/img//Nba/new-orleans-pelicans-logo-transparent.png'),
                          require('../../../res/img/Nba/Oklahoma_City_Thunder.svg.png'),
                          'ROUND 4',
                          'Best of 4',  
                          '4-0',  
                        )}
                      </View> 
                      </View> 

               <View style={styles.containerNBA}>
      <View style={styles.mainCardNBA}>
        <Image
          source={require('../../../res/img/Nba/Logo-NBA.png')}
          style={styles.logoNBA}
        />
        <Text style={styles.mainCardTitleNBA}>Nba</Text>
      </View>

      <FlatList
                   data={data}
                   renderItem={renderItem}
                   keyExtractor={item => String(item.id)}
                   />

      <View style={styles.card}>
        <Image
          source={require('../../../res/img/Nba/lukadoncic.jpg')}
          style={styles.image}
        />
         <View style={styles.content}>
          <Text style={styles.title}>Doncic ofusca retorno de Kawhi, Mavericks batem Clippers e empatam série nos playoffs da NBA</Text>
          <Text style={styles.description}>Uma 'batalha' digna de playoffs nesta terça-feira (23) na NBA. Pela segunda vez em três dias, LA Clippers e Dallas Mavericks mediram forças na Crypto.com Arena.</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../../res/img/Nba/Suns-vs-Timberwolves.jpg')}
          style={styles.image}
        />
         <View style={styles.content}>
          <Text style={styles.title}>Timberwolves mantêm embalo, se impõem contra os Suns e abrem 2 a 0 nos playoffs da NBA</Text>
          <Text style={styles.description}>Novo duelo, mesmo desfecho na NBA. Jogando em casa pelo Jogo 2 dos playoffs nesta terça-feira (23), o Minnesota Timberwolves repetiu o roteiro e voltou a vencer o Phoenix Suns, desta vez, por 105 a 93, </Text>
        </View>
      </View>
      </View>

      <View style={styles.containerNBA}>
      <View style={styles.mainCardNBA}>
        <Image
          source={require('../../../res/img/Nbb/NBB_Logo-Cores.png')}
          style={styles.logoNBA}
        />
        <Text style={styles.mainCardTitleNBA}>Nbb</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../../res/img/Nbb/playoffsnbb.jpg')}
          style={styles.image}
        />
         <View style={styles.content}>
          <Text style={styles.title}>Playoffs NBB CAIXA 2023/24: saiba tudo sobre o confronto entre Flamengo e Botafogo</Text>
          <Text style={styles.description}>
									É o segundo jogo da série melhor de três das oitavas de final dos Playoffs do NBB CAIXA 2023/24; Flamengo avança com uma vitória; o Botafogo quer continuar vivo.</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../../res/img/Nbb/paranhos.jpg')}
          style={styles.image}
        />
         <View style={styles.content}>
          <Text style={styles.title}>Paranhos usa rede de apoio para fazer melhor temporada no NBB CAIXA e impulsionar o Minas nas quartas</Text>
          <Text style={styles.description}>
									Com dois duplo-duplos nas oitavas do NBB CAIXA, Paranhos tem ajuda familiar, dos companheiros e de equipe multidisciplinar para crescer no momento decisivo para o Minas.</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../../res/img/Nbb/globocontrato.jpg')}
          style={styles.image}
        />
         <View style={styles.content}>
          <Text style={styles.title}>Liga Nacional de Basquete e Grupo Globo renovam contrato por mais um ano</Text>
          <Text style={styles.description}>
									Liga Nacional de Basquete e o Grupo Globo renovam contrato que prevê mais um ano e pela terceira temporada consecutiva transmissão dos jogos do NBB CAIXA no sportv.</Text>
        </View>
      </View>
      </View>

      <View style={styles.containerNBA}>
      <View style={styles.mainCardNBA}>
        <Image
          source={require('../../../res/img/Wnba/Womens-National-Basketball-Association-Logo-2013-2019.jpg')}
          style={styles.logoNBA}
        />
        <Text style={styles.mainCardTitleNBA}>Wnba</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../../res/img/Wnba/britney.jpg')}
          style={styles.image}
        />
         <View style={styles.content}>
          <Text style={styles.title}>Brittney Griner volta a jogar pela WNBA nesta sexta após prisão e drama na Rússia</Text>
          <Text style={styles.description}>
          Jogadora ficou 10 meses detida sob acusação de porte de drogas</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../../res/img/Wnba/soares.jpg')}
          style={styles.image}
        />
         <View style={styles.content}>
          <Text style={styles.title}>Brasileira Stephanie Soares é a quarta escolha do draft da WNBA</Text>
          <Text style={styles.description}>
          Com 23 anos, 2,01 m e o nome marcado na história do basquete do Brasil. Essa é Stephanie Soares. Na noite desta segunda-feira, a atleta foi escolhida pelo Washington Mystics na posição número quatro no draft da WNBA.

</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../../res/img/Wnba/seatlechampions.jpg')}
          style={styles.image}
        />
         <View style={styles.content}>
          <Text style={styles.title}>Seattle Storm é tetracampeão da WNBA</Text>
          <Text style={styles.description}>
          O Seattle Storm derrotou o Las Vegas Aces, por 92 a 59, nesta terça-feira (6), na "bolha" criada na IMG Academy, em Brandenton, na Florida e conquistou seu quarto título na história da WNBA.

          </Text>
        </View>
      </View>
      </View>
              </ScrollView>
          </SafeAreaView>
    );
   
}

