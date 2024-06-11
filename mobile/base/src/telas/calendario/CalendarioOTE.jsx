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
              source={require("../../../res/img/Ote/otebanner.png")}
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
        <Text style={styles.sectionTitle}>OTE (Playoffs)</Text>
        <Text style={styles.sectionTitle}>Domingo, 17 de Março 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '68x71'
              )}
            </View>
        <Text style={styles.sectionTitle}>Sexta-feira, 15 de Março 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/cityheapers.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '76x66'
              )}
            </View>
        <Text style={styles.sectionTitle}>Quinta-feira, 14 de Março 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/cityheapers.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '71x78'
              )}
            </View>
        <Text style={styles.sectionTitle}>Sábado, 9 de Março 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '71x78'
              )}
            </View>
        <Text style={styles.sectionTitle}>Sexta-feira, 8 de Março 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '77x69'
              )}
            </View>
          <Text style={styles.sectionTitle}>Segunda-feira, 4 de Março 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/coldhearts.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '67x90'
              )}
            </View>
          <Text style={styles.sectionTitle}>Sábado, 2 de Março 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/cityheapers.jpg'),
                require('../../../res/img/Ote/coldhearts.jpg'),
                'Encerrado',
                'Final',
                '85x74'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '77x85'
              )}
            </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 1 de Março 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                'Encerrado',
                'Final',
                '103x94'
              )}
            </View>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/coldhearts.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '92x91'
              )}
            </View>
          <Text style={styles.sectionTitle}>Domingo, 25 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/jellyfam.jpg'),
                require('../../../res/img/Ote/coldhearts.jpg'),
                'Encerrado',
                'Final',
                '87x93'
              )}
            </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 23 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/bluechecks.jpg'),
                'Encerrado',
                'Final',
                '83x75'
              )}
            </View>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/coldhearts.jpg'),
                require('../../../res/img/Ote/jellyfam.jpg'),
                'Encerrado',
                'Final',
                '78x80'
              )}
            </View>
          <Text style={styles.sectionTitle}>Quinta-feira, 22 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/jellyfam.jpg'),
                require('../../../res/img/Ote/coldhearts.jpg'),
                'Encerrado',
                'Final',
                '67x79'
              )}
            </View>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/bluechecks.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '67x75'
              )}
            </View>
          <Text style={styles.sectionTitle}>Terça-feira, 20 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/diamonddoves.jpg'),
                require('../../../res/img/Ote/bluechecks.jpg'),
                'Encerrado',
                'Final',
                '57x71'
              )}
            </View>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rollingloud.jpg'),
                require('../../../res/img/Ote/jellyfam.jpg'),
                'Encerrado',
                'Final',
                '69x86'
              )}
            </View>
          <Text style={styles.sectionTitle}>Sábado, 17 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/bluechecks.jpg'),
                require('../../../res/img/Ote/rollingloud.jpg'),
                'Encerrado',
                'Final',
                '86x60'
              )}
            </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 16 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/jellyfam.jpg'),
                require('../../../res/img/Ote/diamonddoves.jpg'),
                'Encerrado',
                'Final',
                '81x82'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                'Encerrado',
                'Final',
                '97x78'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/coldhearts.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '61x78'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/jellyfam.jpg'),
                require('../../../res/img/Ote/rollingloud.jpg'),
                'Encerrado',
                'Final',
                '60x98'
              )}
            </View>
          <Text style={styles.sectionTitle}>Quinta-feira, 15 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/bluechecks.jpg'),
                require('../../../res/img/Ote/diamonddoves.jpg'),
                'Encerrado',
                'Final',
                '70x73'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/coldhearts.jpg'),
                'Encerrado',
                'Final',
                '92x82'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '91x88'
              )}
            </View>
          <Text style={styles.sectionTitle}>Terça-feira, 13 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rollingloud.jpg'),
                require('../../../res/img/Ote/diamonddoves.jpg'),
                'Encerrado',
                'Final',
                '81x78'
              )}
            </View>
          <Text style={styles.sectionTitle}>sábado, 10 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rollingloud.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '79x74'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/cityheapers.jpg'),
                require('../../../res/img/Ote/coldhearts.jpg'),
                'Encerrado',
                'Final',
                '80x86'
              )}
            </View>
          <Text style={styles.sectionTitle}>sexta-feira, 9 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                'Encerrado',
                'Final',
                '95x99'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rollingloud.jpg'),
                require('../../../res/img/Ote/jellyfam.jpg'),
                'Encerrado',
                'Final',
                '81x84'
              )}
            </View>
          <Text style={styles.sectionTitle}>  Quarta-feira, 7 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/bluechecks.jpg'),
                require('../../../res/img/Ote/jellyfam.jpg'),
                'Encerrado',
                'Final',
                '93x85'
              )}
            </View>
          <Text style={styles.sectionTitle}>sexta-feira, 2 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rollingloud.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '76x82'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                require('../../../res/img/Ote/jellyfam.jpg'),
                'Encerrado',
                'Final',
                '106x78'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/diamonddoves.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '64x85'
              )}
            </View>
          <Text style={styles.sectionTitle}>Quinta-feira, 1 de Fevereiro 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/rollingloud.jpg'),
                'Encerrado',
                'Final',
                '88x76'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/coldhearts.jpg'),
                require('../../../res/img/Ote/bluechecks.jpg'),
                'Encerrado',
                'Final',
                '79x75'
              )}
            </View>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/diamonddoves.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '51x58'
              )}
            </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 29 de dezembro 2023</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/jellyfam.jpg'),
                'Encerrado',
                'Final',
                '73x69'
              )}
            </View>
            <Text style={styles.sectionTitle}>Sexta-feira, 22 de dezembro 2023</Text>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/jellyfam.jpg'),
                require('../../../res/img/Ote/coldhearts.jpg'),
                'Encerrado',
                'Final',
                '73x82'
              )}
            </View>
            <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Ote/cityheapers.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '71x67'
              )}
          </View>
          <Text style={styles.sectionTitle}>Domingo, 17 de dezembro 2023</Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/diamonddoves.jpg'),
                require('../../../res/img/Ote/jellyfam.jpg'),
                'Encerrado',
                'Final',
                '76x90'
              )}
          </View>
          {maisInformacaoVisivel && (
        <View id="maisInformacao">
          <Text style={styles.sectionTitle}>Sábado, 16 de dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/diamonddoves.jpg'),
                require('../../../res/img/Ote/coldhearts.jpg'),
                'Encerrado',
                'Final',
                '67x75'
              )}
          </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 15 de dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/cityheapers.jpg'),
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                'Encerrado',
                'Final',
                '67x75'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/bluechecks.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '74x69'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/coldhearts.jpg'),
                require('../../../res/img/Ote/jellyfam.jpg'),
                'Encerrado',
                'Final',
                '107x87'
              )}
          </View>
          <Text style={styles.sectionTitle}>Quinta-feira, 14 de Dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '92x107'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/bluechecks.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '71x86'
              )}
          </View>
          <Text style={styles.sectionTitle}>Segunda-feira, 11 de dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/bluechecks.jpg'),
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                'Encerrado',
                'Final',
                '71x75'
              )}
          </View>
          <Text style={styles.sectionTitle}>Domingo, 10 de dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/diamonddoves.jpg'),
                require('../../../res/img/Ote/rollingloud.jpg'),
                'Encerrado',
                'Final',
                '85x71'
              )}
          </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 8 de dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/rollingloud.jpg'),
                require('../../../res/img/Ote/coldhearts.jpg'),
                'Encerrado',
                'Final',
                '69x76'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/rwe.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '77x73'
              )}
          </View>
          <Text style={styles.sectionTitle}>Quarta-feira, 6 de dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/rollingloud.jpg'),
                require('../../../res/img/Ote/bluechecks.jpg'),
                'Encerrado',
                'Final',
                '92x61'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/diamonddoves.jpg'),
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                'Encerrado',
                'Final',
                '71x76'
              )}
          </View>
          <Text style={styles.sectionTitle}>Terça-feira, 5 de dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/diamonddoves.jpg'),
                require('../../../res/img/Ote/bluechecks.jpg'),
                'Encerrado',
                'Final',
                '79x101'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/rollingloud.jpg'),
                require('../../../res/img/Ote/yngdreamerz.jpg'),
                'Encerrado',
                'Final',
                '87x91'
              )}
          </View>
          <Text style={styles.sectionTitle}>Sabado, 2 de dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/jellyfam.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '83x78'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/coldhearts.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '78x94'
              )}
              
          </View>
          <Text style={styles.sectionTitle}>Sexta-feira, 1 de dezembro 2023
          </Text>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/coldhearts.jpg'),
                require('../../../res/img/Ote/rwe.jpg'),
                'Encerrado',
                'Final',
                '92x90'
              )}
          </View>
          <View style={styles.gamesContainer}>
          {renderGameItemNba(
                require('../../../res/img/Ote/jellyfam.jpg'),
                require('../../../res/img/Ote/cityheapers.jpg'),
                'Encerrado',
                'Final',
                '82x91'
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
