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
        image: require('../../../res/img/Ote/EliEllis.png'), 
        name: ['Eli Ellis'],
        team: ['YNG Dreamerz'],
        points: '33.4',
      },
      { number: 2, 
        image: require('../../../res/img/Ote/ianjackson.png'), 
        name: ['Ian Jackson'],
        team: ['Jelly Fam'],
        points: '23.9',
      },
      { number: 3, 
        image: require('../../../res/img/Ote/karterknox.png'), 
        name: ['Karter Knox'],
        team: ['RWE'],
        points: '23.1',
      },
      { number: 4, 
        image: require('../../../res/img/Ote/larryjhonson.png'), 
        name: ['Larry Jhonson'],
        team: ['Rolling Loud'],
        points: '20.1',
      },
      { number: 5, 
        image: require('../../../res/img/Ote/rakease.png'), 
        name: ['Rakease Passmore'],
        team: ['Blue Checks'],
        points: '19.2',
      },
    ];

    const playersAst = [
      { number: 1, 
        image: require('../../../res/img/Ote/daquan.png'), 
        name: ['Daquan Davis'],
        team: ['RWE'],
        points: '5.8',
      },
      { number: 2, 
        image: require('../../../res/img/Ote/martin.png'), 
        name: ['Martin Somerville'],
        team: ['Rooling Loud'],
        points: '5.6',
      },
      { number: 3, 
        image: require('../../../res/img/Ote/jaeden.png'), 
        name: ['Jaeden Mustaf'],
        team: ['City Reapers'],
        points: '5.6',
      },
      { number: 4, 
        image: require('../../../res/img/Ote/dallquan.png'), 
        name: ['Dellquan Warren'],
        team: ['Jelly Fam'],
        points: '5.4',
      },
      { number: 5, 
        image: require('../../../res/img/Ote/mikel.png'), 
        name: ['Mikel Brown'],
        team: ['Cold Hearts'],
        points: '5.4',
      },
    ];

    const playersReb = [
      { number: 1, 
        image: require('../../../res/img/Ote/johnbol.png'), 
        name: ['John Bol'],
        team: ['Cold Hearts'],
        points: '9.9',
      },
      { number: 2, 
        image: require('../../../res/img/Ote/solomon.png'), 
        name: ['Solomon Ominu'],
        team: ['Jelly Fam'],
        points: '9.9',
      },
      { number: 3, 
        image: require('../../../res/img/Ote/bryson.png'), 
        name: ['Bryson Tiller'],
        team: ['City Reapers'],
        points: '9.4',
      },
      { number: 4, 
        image: require('../../../res/img/Ote/somto.png'), 
        name: ['Somto Cyril'],
        team: ['RWE'],
        points: '9.3',
      },
      { number: 5, 
        image: require('../../../res/img/Ote/darrion.png'), 
        name: ['Darrion Sutton'],
        team: ['RWE'],
        points: '8.2',
      },
    ];

    const playersBlocks = [
      { number: 1, 
        image: require('../../../res/img/Ote/somto.png'), 
        name: ['Somto Cyril'],
        team: ['RWE'],
        points: '3.3',
      },
      { number: 2, 
        image: require('../../../res/img/Ote/natan.png'), 
        name: ['Nathan Missia-Dio'],
        team: ['RWE'],
        points: '2.3',
      },
      { number: 3, 
        image: require('../../../res/img/Ote/johnbol.png'), 
        name: ['John Bol'],
        team: ['Cold Hearts'],
        points: '1.8',
      },
      { number: 4, 
        image: require('../../../res/img/Ote/daquan.png'), 
        name: ['Marcis Ponder'],
        team: ['Cold HeartsR'],
        points: '1.7',
      },
      { number: 5, 
        image: require('../../../res/img/Ote/bryson.png'), 
        name: ['Bryson Tiller'],
        team: ['City Reapers'],
        points: '1.6',
      },
    ];

    const playersSteals = [
      { number: 1, 
        image: require('../../../res/img/Ote/daquan.png'), 
        name: ['Ketraleus Aldridge'],
        team: ['Diamond Doves'],
        points: '2.3',
      },
      { number: 2, 
        image: require('../../../res/img/Ote/amari.png'), 
        name: ['Amari Evans'],
        team: ['City Reapers'],
        points: '2.2',
      },
      { number: 3, 
        image: require('../../../res/img/Ote/larryjhonson.png'), 
        name: ['Larry Jhonson'],
        team: ['Rolling Loud'],
        points: '2.0',
      },
      { number: 4, 
        image: require('../../../res/img/Ote/dallquan.png'), 
        name: ['Dellquan Warren'],
        team: ['Jelly Fam'],
        points: '2.0',
      },
      { number: 5, 
        image: require('../../../res/img/Ote/EliEllis.png'), 
        name: ['Eli Ellis'],
        team: ['YNG Dreamerz'],
        points: '1.8',
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
                            source={require("../../../res/img/Ote/noticiaote.png")} 
                            style={styles.newsImage}
                        >
                        </ImageBackground>
                        <View style={styles.newsContent}>
                            <Text style={styles.textContent}> Brasileiro Reynan dos Santos anuncia saída da liga Overtime Elite
Inscrito no Draft 2024 da NBA, anunciou o desligamento pelas redes </Text>

                        </View>
                    </View>
                    </View>
                    
       <View style={styles.container}>
       <Text style={styles.titleP}>Líderes de Estatísticas da Postseason - OTE - 2024</Text>
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
