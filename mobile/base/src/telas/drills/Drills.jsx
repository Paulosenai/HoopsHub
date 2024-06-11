import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Header } from '@rneui/themed';
import FastImage from 'react-native-fast-image';
import styles from "./Style";

export default function Home() {
  const navigation = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navigateToScreen = (screenName, drillType) => {
    navigation.navigate(screenName, { drillType });
  };

  const newsData = [
    { title: 'DRIBLES', image: require('../../../res/img/dribles.gif'), screen: 'Dribles' },
    { title: 'ARREMESSO', image: require('../../../res/img/arremesso.gif'), screen: 'Arremesso' },
    { title: 'PASSES', image: require('../../../res/img/passe.gif'), screen: 'Passes' },
    { title: 'LAYUPS', image: require('../../../res/img/Layup.gif'), screen: 'Layup' },
  ];

  return (
    <SafeAreaView style={styles.scrollview}>
      <Header
        backgroundColor="black"
        barStyle="light-content"
        centerComponent={{
          text: 'TREINO EM CASA',
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
        }}
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: toggleSidebar,
        }}
        rightComponent={{
          icon: 'person',
          color: '#fff',
          onPress: toggleSidebar,
        }}
      />
      {isSidebarOpen && (
        <View style={[styles.sidebarContainer, { transform: [{ translateX: isSidebarOpen ? 0 : -300 }] }]}>
          <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>

          <View style={styles.sidebarContent}>
            <Text style={styles.sidebarTitle}>Login</Text>
            <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.sidebarItemText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.sidebarItemText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <ScrollView>
        {newsData.map((item) => (
          <TouchableOpacity key={item.title} onPress={() => navigateToScreen(item.screen, item.title)}> 
            <FastImage
              source={item.image}
              style={styles.newsImage}
              resizeMode={FastImage.resizeMode.contain}
            >
              <View style={styles.imageTextContainer}>
                <Text style={styles.imageText}>{item.title}</Text>
              </View>
            </FastImage>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
