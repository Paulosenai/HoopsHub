import React, {useState} from "react";
import { View, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Header} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from "./Style";


export default function Estatisticas({ navigation }) {
    const Sidebar = ({ isOpen, onClose }) => {
      const navigation = useNavigation();
      const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
        onClose(); 
    }
    
      return (     
        <View style={[styles.sidebarContainer, { transform: [{ translateX: isOpen ? 0 : -300 }] }]}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
  
        <View style={styles.sidebarContent}>
          <Text style={styles.sidebarTitle}>ESTATISTICAS</Text>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => 
                navigation.navigate('EstatisticasWnba')}>
            <Text style={styles.sidebarItemText}>Estatisticas WNBA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => 
                navigation.navigate('EstatisticasOte')}>
            <Text style={styles.sidebarItemText}>Estatisticas OTE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => 
                navigation.navigate('EstatisticasNba')}>
            <Text style={styles.sidebarItemText}>Estatisticas NBA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => 
                navigation.navigate('EstatisticasNbb')}>
            <Text style={styles.sidebarItemText}>Estatisticas NBB</Text>
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
  
    
    
    const playersPts = [
      { number: 1, 
        image: require('../../../res/img/Nba/Embiid-person.png'), 
        name: ['Joel Embiid'],
        team: ['PHI'],
        points: '35.0',
      },
      { number: 2, 
        image: require('../../../res/img/Nba/jalenBrunson-person.png'), 
        name: ['Jalen Brunson'],
        team: ['NY'],
        points: '33.0',
      },
      { number: 3, 
        image: require('../../../res/img/Nba/damian-person.png'), 
        name: ['Damian Lillard'],
        team: ['MIL'],
        points: '32.3',
      },
      { number: 4, 
        image: require('../../../res/img/Nba/anthony-person.png'), 
        name: ['Anthony Edwards'],
        team: ['MIN'],
        points: '31.0',
      },
      { number: 5, 
        image: require('../../../res/img/Nba/luka-person.png'), 
        name: ['Luka Doncic'],
        team: ['DAL'],
        points: '29.0',
      },
    ];

    const playersAst = [
      { number: 1, 
        image: require('../../../res/img/Nba/tyrese-person.png'), 
        name: ['Tyrese Haliburton'],
        team: ['IND'],
        points: '10.0',
      },
      { number: 2, 
        image: require('../../../res/img/Nba/nikola-person.png'), 
        name: ['Nikola Jokic'],
        team: ['DEN'],
        points: '9.8',
      },
      { number: 3, 
        image: require('../../../res/img/Nba/jalenBrunson-person.png'), 
        name: ['Jalen Brunson'],
        team: ['NY'],
        points: '9.0',
      },
      { number: 4, 
        image: require('../../../res/img/Nba/lebron-person.png'), 
        name: ['Lebron James'],
        team: ['LAL'],
        points: '8.8',
      },
      { number: 5, 
        image: require('../../../res/img/Nba/luka-person.png'), 
        name: ['Luka Doncic'],
        team: ['DAL'],
        points: '8.5',
      },
    ];

    const players3pm = [
      { number: 1, 
        image: require('../../../res/img/Nba/curry-person.png'), 
        name: ['Stephen Curry'],
        team: ['GS'],
        points: '4.8',
      },
      { number: 2, 
        image: require('../../../res/img/Nba/luka-person.png'), 
        name: ['Luka Doncic'],
        team: ['DAL'],
        points: '4.1',
      },
      { number: 3, 
        image: require('../../../res/img/Nba/CJ-PERSON.png'), 
        name: ['CJ McCollum'],
        team: ['NO'],
        points: '3.6',
      },
      { number: 4, 
        image: require('../../../res/img/Nba/donte-person.png'), 
        name: ['Donte DiVincenzo'],
        team: ['NY'],
        points: '3.5',
      },
      { number: 5, 
        image: require('../../../res/img/Nba/klay-person.png'), 
        name: ['Klay Thompson'],
        team: ['GS'],
        points: '3.5',
      },
    ];

    const playersReb = [
      { number: 1, 
        image: require('../../../res/img/Nba/nikola-person.png'), 
        name: ['Nikola Jokic'],
        team: ['DEN'],
        points: '16.2',
      },
      { number: 2, 
        image: require('../../../res/img/Nba/anthonydavis-person.png'), 
        name: ['Anthony Davis'],
        team: ['LAL'],
        points: '15.6',
      },
      { number: 3, 
        image: require('../../../res/img/Nba/Jarett-person.png'), 
        name: ['Jarrett Allen'],
        team: ['CLE'],
        points: '13.8',
      },
      { number: 4, 
        image: require('../../../res/img/Nba/josh-person.png'), 
        name: ['Josh Hart'],
        team: ['NY'],
        points: '12.8',
      },
      { number: 5, 
        image: require('../../../res/img/Nba/Valanciunas.png'), 
        name: ['Jonas Valanciunas'],
        team: ['NO'],
        points: '11.0',
      },
    ];

    const playersBlocks = [
      { number: 1, 
        image: require('../../../res/img/Nba/wemby-person.png'), 
        name: ['V. Wembanyama'],
        team: ['SA'],
        points: '3.6',
      },
      { number: 2, 
        image: require('../../../res/img/Nba/Walker-person.png'), 
        name: ['Walker Kessler'],
        team: ['UTAH'],
        points: '2.4',
      },
      { number: 3, 
        image: require('../../../res/img/Nba/brook-person.png'), 
        name: ['Brook Lopez'],
        team: ['MIL'],
        points: '2.4',
      },
      { number: 4, 
        image: require('../../../res/img/Nba/anthonydavis-person.png'), 
        name: ['Anthony Davis'],
        team: ['LAL'],
        points: '2.3',
      },
      { number: 5, 
        image: require('../../../res/img/Nba/CHET-person.png'), 
        name: ['Chet Holmgren'],
        team: ['OKC'],
        points: '2.3',
      },
    ];

    const playersSteals = [
      { number: 1, 
        image: require('../../../res/img/Nba/Fox-person.png'), 
        name: ['D. Fox'],
        team: ['SAC'],
        points: '2.0',
      },
      { number: 2, 
        image: require('../../../res/img/Nba/shai-person.png'), 
        name: ['S. Gilgeous-Alexander'],
        team: ['OKC'],
        points: '2.0',
      },
      { number: 3, 
        image: require('../../../res/img/Nba/matisse-person.png'), 
        name: ['Matisse Thybulle'],
        team: ['POR'],
        points: '1.7',
      },
      { number: 4, 
        image: require('../../../res/img/Nba/caruso-person.png'), 
        name: ['Alex Caruso'],
        team: ['CHI'],
        points: '1.7',
      },
      { number: 5, 
        image: require('../../../res/img/Nba/kawhi-person.png'), 
        name: ['kawhi Leonard'],
        team: ['LAC'],
        points: '1.6',
      },
    ];

  return (
  
      <SafeAreaView style={styles.containerScroll}>
        <Header
          backgroundColor="black"
          barStyle="light-content"
          centerComponent={{
            style: {color: "#fff", fontSize: 20, fontWeight: "bold"} ,
          }}
          leftComponent={{ icon: 'menu', color: '#fff', onPress: toggleSidebar }}
          rightComponent={{ icon: 'person', color: '#fff', onPress: toggleSidebar }}
        />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
       <ScrollView contentContainerStyle={styles.scrollContent}>
       <View style={styles.section}>
                    {/* Notícia 1 */}
                    <View style={styles.newsCard}>
                        <ImageBackground
                            source={require("../../../res/img/Nba/PlayOffs2.png")} 
                            style={styles.newsImage}
                        >
                        </ImageBackground>
                        <View style={styles.newsContent}>
                            <Text style={styles.textContent}> Com o fim da temporada regular da NBA, é chegada a hora dos {'\n'} playoffs. As 16 melhores equipes da liga finalmente estão definidas.</Text>

                        </View>
                    </View>
                    </View>
                    
       <View style={styles.container}>
       <Text style={styles.titleP}>Líderes de Estatísticas da Postseason - NBA - 2023-24</Text>
       <Text style={styles.title}>Lideres Ofensivos</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerItem}>PONTOS</Text>
        <Text style={styles.headerItem}>PTS</Text>
      </View>
      {playersPts.map(player => (
        <View key={player.number} style={styles.row}>
          <Text style={styles.item}>{player.number}</Text>
          <Image source={player.image} style={styles.image} />
          <Text style={styles.itemName}>{player.name}</Text>
          <Text style={styles.item}>{player.team}</Text>
          <Text style={styles.item}>{player.points}</Text>
        </View>
      ))}
    </View>

    <View style={styles.container}>
       <Text style={styles.title}>Lideres Ofensivos</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerItem}>ASSISTÊNCIAS</Text>
        <Text style={styles.headerItem}>AST</Text>
      </View>
      {playersAst.map(player => (
        <View key={player.number} style={styles.row}>
          <Text style={styles.item}>{player.number}</Text>
          <Image source={player.image} style={styles.image} />
          <Text style={styles.itemName}>{player.name}</Text>
          <Text style={styles.item}>{player.team}</Text>
          <Text style={styles.item}>{player.points}</Text>
        </View>
      ))}
    </View>

    <View style={styles.container}>
       <Text style={styles.title}>Lideres Ofensivos</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerItem}>ARREMESSOS DE 3 PONTOS</Text>
        <Text style={styles.headerItem}>3PM</Text>
      </View>
      {players3pm.map(player => (
        <View key={player.number} style={styles.row}>
          <Text style={styles.item}>{player.number}</Text>
          <Image source={player.image} style={styles.image} />
          <Text style={styles.itemName}>{player.name}</Text>
          <Text style={styles.item}>{player.team}</Text>
          <Text style={styles.item}>{player.points}</Text>
        </View>
      ))}
    </View>

    <View style={styles.container}>
       <Text style={styles.title}>Lideres Defensivos</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerItem}>REBOTES</Text>
        <Text style={styles.headerItem}>AST</Text>
      </View>
      {playersReb.map(player => (
        <View key={player.number} style={styles.row}>
          <Text style={styles.item}>{player.number}</Text>
          <Image source={player.image} style={styles.image} />
          <Text style={styles.itemName}>{player.name}</Text>
          <Text style={styles.item}>{player.team}</Text>
          <Text style={styles.item}>{player.points}</Text>
        </View>
      ))}
    </View>

    <View style={styles.container}>
       <Text style={styles.title}>Lideres Defensivos</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerItem}>TOCOS</Text>
        <Text style={styles.headerItem}>BLK</Text>
      </View>
      {playersBlocks.map(player => (
        <View key={player.number} style={styles.row}>
          <Text style={styles.item}>{player.number}</Text>
          <Image source={player.image} style={styles.image} />
          <Text style={styles.itemName}>{player.name}</Text>
          <Text style={styles.item}>{player.team}</Text>
          <Text style={styles.item}>{player.points}</Text>
        </View>
      ))}
    </View>

    <View style={styles.container}>
       <Text style={styles.title}>Lideres Defensivos</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerItem}>ROUBOS</Text>
        <Text style={styles.headerItem}>STL</Text>
      </View>
      {playersSteals.map(player => (
        <View key={player.number} style={styles.row}>
          <Text style={styles.item}>{player.number}</Text>
          <Image source={player.image} style={styles.image} />
          <Text style={styles.itemName}>{player.name}</Text>
          <Text style={styles.item}>{player.team}</Text>
          <Text style={styles.item}>{player.points}</Text>
        </View>
      ))}
    </View>

        </ScrollView>
      </SafeAreaView>
  );
}
