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
              source={require("../../../res/img/Wnba/bannerCalendario.jpg")}
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
        <Text style={styles.sectionTitle}>WNBA (temporada regular)</Text>
          <Text style={styles.sectionTitle}>Terça-feira, 21 de maio 2024</Text>
          <View style={styles.gamesContainer}>
            {renderGameItemNba(
                require('../../../res/img/Wnba/dallaswings.png'),
                require('../../../res/img/Wnba/atlantadream.png'),
                'Temporada regular',
                '20:30',
                
              )}
            </View>
            <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/phoenixmerc.png'),
                require('../../../res/img/Wnba/Las_Vegas_Aces_logo.svg.png'),
                'Temporada regular',
                '23:00',
                
              )}
            </View>
            <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/WashingtonMystics.png'),
                require('../../../res/img/Wnba/Los_Angeles_Sparks_logo.svg.png'),
                'Temporada regular',
                '23:00',
                
              )}
          </View>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/minessota_linx.png'),
                require('../../../res/img/Wnba/seattle_storm.png'),
                'Temporada regular',
                '23:00',
                
              )}
          </View>
          <Text style={styles.sectionTitle}>Quarta-feira, 22 de maio 2024</Text>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/Indiana_Fever_logo.svg.png'),
                require('../../../res/img/Wnba/seattle_storm.png'),
                'temporada regular',
                '23:00',
                
              )}
          </View>
          {maisInformacaoVisivel && (
        <View id="maisInformacao">
          <Text style={styles.sectionTitle}>Quinta-feira, 23 de maio 2024</Text>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/minessota_linx.png'),
                require('../../../res/img/Wnba/Connecticut_Sun_logo.svg.png'),
                'Temporada regular',
                '20:00',
                
              )}
          </View>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/chiagosky.png'),
                require('../../../res/img/Wnba/New_York_Liberty_logo.svg.png'),
                'Temporada regular',
                '20:00',
              )}
          </View>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/WashingtonMystics.png'),
                require('../../../res/img/Wnba/phoenixmerc.png'),
                'Temporada regular',
                '23:00',
              )}
          </View>
          
          <Text style={styles.sectionTitle}>Sexta-feira, 24 de maio 2024</Text>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/Indiana_Fever_logo.svg.png'),
                require('../../../res/img/Wnba/Los_Angeles_Sparks_logo.svg.png'),
                'Temporada regular',
                '23:00',
              )}
          </View>
          <Text style={styles.sectionTitle}>Sábado, 25 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/New_York_Liberty_logo.svg.png'),
                require('../../../res/img/Wnba/minessota_linx.png'),
                'Temporada regular',
                '14:00',
              )}
          </View>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/Connecticut_Sun_logo.svg.png'),
                require('../../../res/img/Wnba/chiagosky.png'),
                'Temporada regular',
                '21:00',
              )}
          </View>
        
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/Indiana_Fever_logo.svg.png'),
                require('../../../res/img/Wnba/Las_Vegas_Aces_logo.svg.png'),
                'Temporada regular',
                '22:00',
              )}
          </View>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/WashingtonMystics.png'),
                require('../../../res/img/Wnba/seattle_storm.png'),
                'Temporada regular',
                '22:00',
              )}
          </View>
          <Text style={styles.sectionTitle}>Domingo, 26 de maio 2024
          </Text>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/minessota_linx.png'),
                require('../../../res/img/Wnba/atlantadream.png'),
                'Temporada regular',
                '19:00',
              )}
          </View>
          <View style={styles.gamesContainer}>
              {renderGameItemNba(
                require('../../../res/img/Wnba/dallaswings.png'),
                require('../../../res/img/Wnba/Los_Angeles_Sparks_logo.svg.png'),
                'Temporada regular',
                '22:00',
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
