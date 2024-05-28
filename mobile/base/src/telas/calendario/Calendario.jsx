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
              source={require("../../../res/img/Nba/jayson-tatumbanner.jpg")}
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
          <Text style={styles.sectionTitle}>NBA (Playoffs)</Text>
          <Text style={styles.sectionTitle}>Segunda-feira, 06 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/New_York_Knicks_logo.svg.png'),
                require('../../../res/img/Nba/Indiana_Pacers.png'),
                'Encerrado',
                'Semifinais de conferência',
                '121x117'
              )}
            </View>
            <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Nba/Denver_Nuggets.svg.png'),
                require('../../../res/img/Nba/Minnesota_Timberwolves.png'),
                'Encerrado',
                'Semifinais de conferência',
                '80x106'
              )}
            </View>
            <Text style={styles.sectionTitle}>Terça-feira, 07 de maio 2024</Text>
            <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Nba/celtics-removebg-preview.png'),
                require('../../../res/img/Nba/Cleveland_Cavaliers_secondary_logo.svg.png'),
                'Encerrado',
                'Semifinais de conferência',
                '120x95'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Nba/Oklahoma_City_Thunder.svg.png'),
                require('../../../res/img/Nba/dallas-removebg-preview.png'),
                'Encerrado',
                'Semifinais de conferência',
                '117x95'
              )}
          </View>
          <Text style={styles.sectionTitle}>Quarta-feira, 08 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/New_York_Knicks_logo.svg.png'),
                require('../../../res/img/Nba/Indiana_Pacers.png'),
                'Encerrado',
                'Semifinais de conferência',
                '130x121'
              )}
            </View>
          {maisInformacaoVisivel && (
        <View id="maisInformacao">
         <Text style={styles.sectionTitle}>Quinta-feira, 09 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/celtics-removebg-preview.png'),
                require('../../../res/img/Nba/Cleveland_Cavaliers_secondary_logo.svg.png'),
                'Encerrado',
                'Semifinais de conferência',
                '94x118'
              )}
            </View>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Nba/Oklahoma_City_Thunder.svg.png'),
                require('../../../res/img/Nba/dallas-removebg-preview.png'),
                'Encerrado',
                'Semifinais de conferência',
                '110x119'
              )}
          </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 10 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/Indiana_Pacers.png'),
                require('../../../res/img/Nba/New_York_Knicks_logo.svg.png'),
                'Encerrado',
                'Semifinais de conferência',
                '111x106'
              )}
            </View>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/Minnesota_Timberwolves.png'),
                require('../../../res/img/Nba/Denver_Nuggets.svg.png'),
                'Encerrado',
                'Semifinais de conferência',
                '90x117'
              )}
            </View>
            <Text style={styles.sectionTitle}>Sábado, 11 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/dallas-removebg-preview.png'),
                require('../../../res/img/Nba/Oklahoma_City_Thunder.svg.png'),
                'Encerrado',
                'Semifinais de conferência',
                '105x101'
              )}
            </View>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/Cleveland_Cavaliers_secondary_logo.svg.png'),
                require('../../../res/img/Nba/celtics-removebg-preview.png'),
                'Encerrado',
                'Semifinais de conferência',
                '93x106'
              )}
            </View>
            <Text style={styles.sectionTitle}>Domingo, 12 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/Indiana_Pacers.png'),
                require('../../../res/img/Nba/New_York_Knicks_logo.svg.png'),
                'Encerrado',
                'Semifinais de conferência',
                '121x89'
              )}
            </View>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/Minnesota_Timberwolves.png'),
                require('../../../res/img/Nba/Denver_Nuggets.svg.png'),
                'Encerrado',
                'Semifinais de conferência',
                '107x115'
              )}
            </View>
            <Text style={styles.sectionTitle}>Terça-feira, 21 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/celtics-removebg-preview.png'),
                require('../../../res/img/Nba/Indiana_Pacers.png'),
                'Finais de conferência',
                '21:00',
                '4x0'
              )}
            </View>
            <Text style={styles.sectionTitle}>Quarta-feira, 22 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Nba/Minnesota_Timberwolves.png'),
                require('../../../res/img/Nba/dallas-removebg-preview.png'),
                'Finais de conferência',
                '21:30',
                '0x3'
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
