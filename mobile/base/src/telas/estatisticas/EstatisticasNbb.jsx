import React, {useState} from "react";
import { View, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Header} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from "./Style";


export default function Estatisticas() {
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
                navigation.navigate('Inicio')}>
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
        image: require('../../../res/img/Nbb/thornton.png'), 
        name: ['Thornton'],
        team: ['BOT'],
        points: '21.7',
      },
      { number: 2, 
        image: require('../../../res/img/Nbb/lucas-dias.png'), 
        name: ['Lucas Dias'],
        team: ['FRA'],
        points: '18.8',
      },
      { number: 3, 
        image: require('../../../res/img/Nbb/Cooper.png'), 
        name: ['Cooper'],
        team: ['BRA'],
        points: '17.6',
      },
      { number: 4, 
        image: require('../../../res/img/Nbb/borovnjak.jpg'), 
        name: ['Borovnjak'],
        team: ['PIN'],
        points: '17.0',
      },
      { number: 5, 
        image: require('../../../res/img/Nbb/barnes.png'), 
        name: ['Barnes'],
        team: ['PAT'],
        points: '16.2',
      },
    ];

    const playersAst = [
      { number: 1, 
        image: require('../../../res/img/Nbb/elinho.png'), 
        name: ['Elinho'],
        team: ['COR'],
        points: '9.8',
      },
      { number: 2, 
        image: require('../../../res/img/Nbb/figueiredo.png'), 
        name: ['Figueiredo'],
        team: ['SJO'],
        points: '6.89',
      },
      { number: 3, 
        image: require('../../../res/img/Nbb/ruivo.png'), 
        name: ['Ruivo'],
        team: ['PIN'],
        points: '6.79',
      },
      { number: 4, 
        image: require('../../../res/img/Nba/lebron-person.png'), 
        name: ['Balbi'],
        team: ['FLA'],
        points: '6.14',
      },
      { number: 5, 
        image: require('../../../res/img/Nbb/alex.png'), 
        name: ['Alex'],
        team: ['BAU'],
        points: '5.71',
      },
    ];

    const players3pm = [
      { number: 1, 
        image: require('../../../res/img/Nbb/thornton.png'), 
        name: ['Thornton'],
        team: ['BOT'],
        points: '8.3',
      },
      { number: 2, 
        image: require('../../../res/img/Nbb/lucas-dias.png'), 
        name: ['Lucas Dias'],
        team: ['FRA'],
        points: '6.14',
      },
      { number: 3, 
        image: require('../../../res/img/Nbb/Cooper.png'), 
        name: ['Cooper '],
        team: ['BRA'],
        points: '4.50',
      },
      { number: 4, 
        image: require('../../../res/img/Nbb/barnes.png'), 
        name: ['Barnes'],
        team: ['PAT'],
        points: '5.71',
      },
      { number: 5, 
        image: require('../../../res/img/Nbb/mclanahan.png'), 
        name: ['McClanahan'],
        team: ['FOR'],
        points: '4.37',
      },
    ];

    const playersReb = [
      { number: 1, 
        image: require('../../../res/img/Nbb/ruan.png'), 
        name: ['Ruan'],
        team: ['CAP'],
        points: '9.50',
      },
      { number: 2, 
        image: require('../../../res/img/Nbb/daniel.png'), 
        name: ['Moreira'],
        team: ['MOG'],
        points: '7.94',
      },
      { number: 3, 
        image: require('../../../res/img/Nbb/paranhos.png'), 
        name: ['Paranhos'],
        team: ['MIN'],
        points: '7.23',
      },
      { number: 4, 
        image: require('../../../res/img/Nbb/gabrieljau.png'), 
        name: ['Gabriel Jaú'],
        team: ['FLA'],
        points: '7.7',
      },
      { number: 5, 
        image: require('../../../res/img/Nbb/andrezao.png'), 
        name: ['Andrezão'],
        team: ['CER'],
        points: '7.7',
      },
    ];

    const playersBlocks = [
      { number: 1, 
        image: require('../../../res/img/Nbb/franca.png'), 
        name: ['França'],
        team: ['BOT'],
        points: '1.67',
      },
      { number: 2, 
        image: require('../../../res/img/Nbb/brayan.png'), 
        name: ['Brayan'],
        team: ['CAX'],
        points: '1.0',
      },
      { number: 3, 
        image: require('../../../res/img/Nbb/jeremy.png'), 
        name: ['Jeremy'],
        team: ['BAU'],
        points: '0.88',
      },
      { number: 4, 
        image: require('../../../res/img/Nbb/green.png'), 
        name: ['Green'],
        team: ['CER'],
        points: '0.75',
      },
      { number: 5, 
        image: require('../../../res/img/Nbb/rachel.png'), 
        name: ['R. Rachel'],
        team: ['UFC'],
        points: '0.75',
      },
    ];

    const playersSteals = [
      { number: 1, 
        image: require('../../../res/img/Nbb/brite.png'), 
        name: ['Brite'],
        team: ['BAU'],
        points: '2.0',
      },
      { number: 2, 
        image: require('../../../res/img/Nbb/dreper.png'), 
        name: ['Dreper'],
        team: ['CER'],
        points: '1.79',
      },
      { number: 3, 
        image: require('../../../res/img/Nbb/duane.png'), 
        name: ['Duane Johnson'],
        team: ['UCO'],
        points: '1.69',
      },
      { number: 4, 
        image: require('../../../res/img/Nbb/chourio.png'), 
        name: ['Chourio'],
        team: ['SJO'],
        points: '1.66',
      },
      { number: 5, 
        image: require('../../../res/img/Nbb/corvalan.png'), 
        name: ['Corvalan'],
        team: ['UFC'],
        points: '1.62',
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
                            source={require("../../../res/img/Nbb/playoffs.jpg")} 
                            style={styles.newsImage}
                        >
                        </ImageBackground>
                        <View style={styles.newsContent}>
                            <Text style={styles.textContent}> Playoffs da temporada 2023/24 do NBB CAIXA estão prestes a começar, 
                            Liga apresenta as principais estatísticas dos times!</Text>

                        </View>
                    </View>
                    </View>
                    
       <View style={styles.container}>
       <Text style={styles.titleP}>Líderes de Estatísticas - NBB - 2023-24</Text>
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
