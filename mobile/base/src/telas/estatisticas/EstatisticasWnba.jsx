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
        image: require('../../../res/img/Wnba/arike-ogunbowale.png'), 
        name: ['Arike Ogunbowale'],
        team: ['DAL'],
        points: '30.0',
      },
      { number: 2, 
        image: require('../../../res/img/Wnba/kahleah-copper.png'), 
        name: ['Kahleah Copper'],
        team: ['PHX'],
        points: '28.5',
      },
      { number: 3, 
        image: require('../../../res/img/Wnba/aja-wilson.png'), 
        name: ['Aja Wilson'],
        team: ['LV'],
        points: '26.0',
      },
      { number: 4, 
        image: require('../../../res/img/Wnba/dearica-hamby.png'), 
        name: ['Dearica Hamby'],
        team: ['LA'],
        points: '24.5',
      },
      { number: 5, 
        image: require('../../../res/img/Wnba/napheesa-colier.png'), 
        name: ['Napheesa Collier'],
        team: ['MIN'],
        points: '24.5',
      },
    ];

    const playersAst = [
      { number: 1, 
        image: require('../../../res/img/Wnba/alyssa-thomas.png'), 
        name: ['Alyssa Thomas'],
        team: ['CONN'],
        points: '9.3',
      },
      { number: 2, 
        image: require('../../../res/img/Wnba/jackie-young.png'), 
        name: ['Jackie Young'],
        team: ['LV'],
        points: '8.5',
      },
      { number: 3, 
        image: require('../../../res/img/Wnba/laryshia-clarendon.png'), 
        name: ['Layshia Clarendon'],
        team: ['LA'],
        points: '7.0',
      },
      { number: 4, 
        image: require('../../../res/img/Wnba/courtney-willians.png'), 
        name: ['Courtney Williams'],
        team: ['MIN'],
        points: '6.5',
      },
      { number: 5, 
        image: require('../../../res/img/Wnba/natasha-cloud.png'), 
        name: ['Natasha Cloud'],
        team: ['PHX'],
        points: '6.0',
      },
    ];

    const players3pm = [
      { number: 1, 
        image: require('../../../res/img/Wnba/diana-taurasi.png'), 
        name: ['Diana Taurasi'],
        team: ['PHX'],
        points: '4.0',
      },
      { number: 2, 
        image: require('../../../res/img/Wnba/arike-ogunbowale.png'), 
        name: ['Arike Ogunbowale'],
        team: ['DAL'],
        points: '4.0',
      },
      { number: 3, 
        image: require('../../../res/img/Wnba/rhyane-howard.png'), 
        name: ['Rhyne Howard'],
        team: ['ATL'],
        points: '4.0',
      },
      { number: 4, 
        image: require('../../../res/img/Wnba/kahleah-copper.png'), 
        name: ['Kahleah Copper'],
        team: ['PHX'],
        points: '3.0',
      },
      { number: 5, 
        image: require('../../../res/img/Wnba/kelsey-plum.png'), 
        name: ['Kelsey Plum'],
        team: ['LV'],
        points: '3.0',
      },
    ];

    const playersReb = [
      { number: 1, 
        image: require('../../../res/img/Wnba/alyssa-thomas.png'), 
        name: ['Alyssa Thomas'],
        team: ['CONN'],
        points: '11.7',
      },
      { number: 2, 
        image: require('../../../res/img/Wnba/dearica-hamby.png'), 
        name: ['Dearica Hamby'],
        team: ['LA'],
        points: '11.5',
      },
      { number: 3, 
        image: require('../../../res/img/Wnba/aja-wilson.png'), 
        name: ['Aja Wilson'],
        team: ['LV'],
        points: '11.5',
      },
      { number: 4, 
        image: require('../../../res/img/Wnba/napheesa-colier.png'), 
        name: ['Napheesa Collier'],
        team: ['MIN'],
        points: '10.5',
      },
      { number: 5, 
        image: require('../../../res/img/Wnba/jonquel-jones.png'), 
        name: ['Jonquel Jones'],
        team: ['NY'],
        points: '9.5',
      },
    ];

    const playersBlocks = [
      { number: 1, 
        image: require('../../../res/img/Wnba/allana-smith.png'), 
        name: ['Alanna Smith'],
        team: ['MIN'],
        points: '5.0',
      },
      { number: 2, 
        image: require('../../../res/img/Wnba/cameron-brink.png'), 
        name: ['Cameron Brink'],
        team: ['LA'],
        points: '3.5',
      },
      { number: 3, 
        image: require('../../../res/img/Wnba/elizabeth-willians.png'), 
        name: ['Elizabeth Williams'],
        team: ['CHI'],
        points: '3.0',
      },
      { number: 4, 
        image: require('../../../res/img/Wnba/aja-wilson.png'), 
        name: ['Aja Wilson'],
        team: ['LV'],
        points: '2.5',
      },
      { number: 5, 
        image: require('../../../res/img/Wnba/teaira-mccowan.png'), 
        name: ['Teaira McCowan'],
        team: ['DAL'],
        points: '2.5',
      },
    ];

    const playersSteals = [
      { number: 1, 
        image: require('../../../res/img/Wnba/mariana-mabrey.png'), 
        name: ['Marina Mabrey'],
        team: ['CHI'],
        points: '3.5',
      },
      { number: 2, 
        image: require('../../../res/img/Wnba/napheesa-colier.png'), 
        name: ['Napheesa Collier'],
        team: ['MIN'],
        points: '3.5',
      },
      { number: 3, 
        image: require('../../../res/img/Wnba/elizabeth-willians.png'), 
        name: ['Elizabeth Williams'],
        team: ['CHI'],
        points: '3.0',
      },
      { number: 4, 
        image: require('../../../res/img/Wnba/courtney-willians.png'), 
        name: ['Courtney Williams'],
        team: ['MIN'],
        points: '3.0',
      },
      { number: 5, 
        image: require('../../../res/img/Wnba/breanna-stewart.png'), 
        name: ['Breanna Stewart'],
        team: ['NY'],
        points: '2.8',
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
                            source={require("../../../res/img/Wnba/wnba-banner-1.jpg")} 
                            style={styles.newsImage}
                        >
                        </ImageBackground>
                        <View style={styles.newsContent}>
                            <Text style={styles.textContent}> Chegou o grande momento! Foi necessário esperar até a última rodada, no domingo (10), 
                            mas estamos nos playoffs da WNBA!</Text>

                        </View>
                    </View>
                    </View>
                    
       <View style={styles.container}>
       <Text style={styles.titleP}>Líderes de Estatísticas - WNBA - 2023-24</Text>
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
