import React, {useState} from "react";
import { View, SafeAreaView, ScrollView, Image, ImageBackground,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Header} from '@rneui/themed';
import styles from "./Style";


export default function Home() {
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
          <Text style={styles.sidebarTitle}>CALENDARIO</Text>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => 
                navigation.navigate('CalendarioWNBA')}>
            <Text style={styles.sidebarItemText}>Calendario WNBA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => 
                navigation.navigate('CalendarioOTE')}>
            <Text style={styles.sidebarItemText}>Calendario OTE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => 
                navigation.navigate('Inicio')}>
            <Text style={styles.sidebarItemText}>Calendario NBA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => 
                navigation.navigate('CalendarioNBB')}>
            <Text style={styles.sidebarItemText}>Calendario NBB</Text>
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
  const [maisInformacaoVisivel, setMaisInformacaoVisivel] = useState(false);
  
  const handleCarregarMais = () => {
    setMaisInformacaoVisivel(!maisInformacaoVisivel);
  };
  const renderGameItemNba = (team1Logo, team2Logo, time, subtitle,score) => (
    <View style={styles.gameContainer}>
      <View style={styles.gameItem}>
        <Image source={team1Logo} style={styles.teamLogo} />
        <View>
        <Text style={styles.timeText}>{time}</Text>
        <Text style={styles.subtitle}>{subtitle}{"\n"}</Text>
        <Text  style={styles.ScoreText}>{score}</Text>
        </View>
        <Image source={team2Logo} style={styles.teamLogo} />
      </View>
    </View>
  );

  const renderGameOTE = (team1Logo, team2Logo, time, subtitle, score) => (
    <View style={styles.gameContainerOTE}>
      <View style={styles.gameItemOTE}>
        <Image source={team1Logo} style={styles.teamLogo} />
        <View>
        <Text style={styles.timeText}>{time}</Text>
        <Text style={styles.subtitle}>{subtitle}{"\n"}</Text>
        <Text  style={styles.ScoreText}>{score}</Text>
        </View>
        <Image source={team2Logo} style={styles.teamLogo} />
      </View>
    </View>
  );
  const renderGameChampion = (team1Logo, team2Logo, championWinner, score, text) => (
    <View style={styles.gameContainerOTE}>
      <View style={styles.gameItemOTE}>
        <Image source={team1Logo} style={styles.teamLogo} />
        <View>
        <Image source={championWinner} style={styles.championWinner} />
        <Text  style={styles.ScoreTextChamp}>{score}</Text>
        </View>

        <Image source={team2Logo} style={styles.teamLogo} />
      </View>
    </View>
  );

  
  return (
  
      <SafeAreaView style={styles.containerScroll}>
        <Header
          backgroundColor="black"
          barStyle="light-content"
          centerComponent={{
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
       <View> 
                <View style={styles.newsCard}>
                <ImageBackground
              source={require("../../../res/img/Nbb/Banner.jpg")}
              style={styles.newsImage}>
              <View style={styles.imageTextContainer}>
                <Text style={styles.imageText}>TABELA DE JOGOS</Text>
              </View>
            </ImageBackground>
                </View>
                </View>
                <View id="meuConteudo">
                  
        <View style={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NBB (Playoffs)</Text>
          <Text style={styles.sectionTitle}>Quarta-feira, 02 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nbb/sesifranca.png'),
                require('../../../res/img/Nbb/1200px-CA_Paulistano.svg.png'),
                'Encerrado',
                'Quartas de final',
                '64x61'
              )}
            </View>
            <Text style={styles.sectionTitle}>Quinta-feira, 03 de maio 2024</Text>
            <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Nbb/Escudo_do_Minas_Tenis_Clube.svg.png'),
                require('../../../res/img/Nbb/Brasao_do_Sao_Paulo_Futebol_Clube.svg.png'),
                'Encerrado',
                'Quartas de final',
                '84x59'
              )}
            </View>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nbb/Flamengo_braz_logo.svg.png'),
                require('../../../res/img/Nbb/Basquete_Cearense.png'),
                'Encerrado',
                'Quartas de final',
                '79x71'
              )}
          </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 04 de maio 2024</Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/R10-Score-Vasco-da-Gama.png'),
                require('../../../res/img/Nbb/bauru-removebg-preview.png'),
                'Encerrado/PRG',
                'Quartas de final',
                '84x78'
              )}
          </View>
          {maisInformacaoVisivel && (
        <View id="maisInformacao">
          <Text style={styles.sectionTitle}>Domingo, 06 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Nbb/1200px-CA_Paulistano.svg.png'),
                require('../../../res/img/Nbb/sesifranca.png'),
                'Encerrado',
                'Quartas de final',
                '75x89'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/Brasao_do_Sao_Paulo_Futebol_Clube.svg.png'),
                require('../../../res/img/Nbb/Escudo_do_Minas_Tenis_Clube.svg.png'),
                'Encerrado',
                'Quartas de final',
                '105x74'
              )}
          </View>
          <Text style={styles.sectionTitle}>Terça-feira, 07 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/bauru-removebg-preview.png'),
                require('../../../res/img/Nbb/R10-Score-Vasco-da-Gama.png'),
                'Encerrado',
                'Quartas de final',
                '80x66'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/Basquete_Cearense.png'),
                require('../../../res/img/Nbb/Flamengo_braz_logo.svg.png'),
                'Encerrado',
                'Quartas de final',
                '66x86'
              )}
          </View>
          <Text style={styles.sectionTitle}>Quarta-feira, 08 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/1200px-CA_Paulistano.svg.png'),
                require('../../../res/img/Nbb/sesifranca.png'),
                'Encerrado',
                'Quartas de final',
                '73x80'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/Brasao_do_Sao_Paulo_Futebol_Clube.svg.png'),
                require('../../../res/img/Nbb/Escudo_do_Minas_Tenis_Clube.svg.png'),
                'Encerrado',
                'Quartas de final',
                '86x84'
              )}
          </View>
          <Text style={styles.sectionTitle}>Quinta-feira, 09 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/bauru-removebg-preview.png'),
                require('../../../res/img/Nbb/R10-Score-Vasco-da-Gama.png'),
                'Encerrado',
                'Quartas de final',
                '67x59'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/Basquete_Cearense.png'),
                require('../../../res/img/Nbb/Flamengo_braz_logo.svg.png'),
                'Encerrado',
                'Quartas de final',
                '68x83'
              )}
          </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 17 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/sesifranca.png'),
                require('../../../res/img/Nbb/Escudo_do_Minas_Tenis_Clube.svg.png'),
                'Encerrado',
                'Semifinal',
                '87x63'
              )}
          </View>
          <Text style={styles.sectionTitle}>Sábado, 18 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/Flamengo_braz_logo.svg.png'),
                require('../../../res/img/Nbb/bauru-removebg-preview.png'),
                'Encerrado',
                'Semifinal',
                '92x61'
              )}
          </View>
          <Text style={styles.sectionTitle}>Segunda, 20 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/Escudo_do_Minas_Tenis_Clube.svg.png'),
                require('../../../res/img/Nbb/sesifranca.png'),
                'Encerrado',
                'Semifinal',
                '80x67'
              )}
          </View>
          <Text style={styles.sectionTitle}>Terça-feira, 21 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/bauru-removebg-preview.png'),
                require('../../../res/img/Nbb/Flamengo_braz_logo.svg.png'),
                'Hoje',
                'Semifinal',
                '19:30'
              )}
          </View>
          <Text style={styles.sectionTitle}>Quarta-feira, 22 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nbb/Escudo_do_Minas_Tenis_Clube.svg.png'),
                require('../../../res/img/Nbb/sesifranca.png'),
                'Amanhã',
                'Semifinal',
                '19:00'
              )}
          </View>
        </View>
          )}
          <View style={styles.textContainer}>
          <Text
               title={maisInformacaoVisivel ? 'Ocultar informações' : 'Carregar mais '}
               onPress={handleCarregarMais}
               style={styles.text}
              >Ver mais
            </Text>
              <View style={styles.line}></View>
            </View>
        </View>
        </View>
        </View>

        </ScrollView>
      </SafeAreaView>
  );
}
