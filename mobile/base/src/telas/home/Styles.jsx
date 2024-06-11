import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    newsCard: {
        marginBottom: 20, 
    },
    newsImage: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newsTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    newsContent: {
        height: 60,  
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: 'black',
        textAlign: 'center',
        elevation: 20,
    },
    textContent: {
      fontSize: 12,
      color: 'white',
      margin: 15,
      fontWeight: 'bold'
    },
    gameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    teamContainer: {
        alignItems: 'center',
    },
    teamLogo: {
        width: 60,
        height: 50,
        marginBottom: 8,
    },
    teamName: {
        fontSize: 16,
    },
    titlename: {
      fontSize: 16,
  },
    teamScore: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    vs: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sectionOTE: {
      marginTop: 10,
      marginBottom: 10,
      
    },
    sectionTitleOTE: {
      borderWidth: 1,
      borderRadius: 10,
      width: 300,
      marginLeft: 55,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'black',
    },
    gamesContainer: {
      borderRadius: 8,
      borderColor: 'black',
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#E5E5E5',
      margin: 10,
    },
    gameContainerOTE: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingBottom: 10,
      marginBottom: 10,
    },
    gameItemOTE: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    teamLogo: {
      width: 100,
      height: 50,
      resizeMode: 'contain',
    },
    timeTextOTE: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
    },
    subtitle: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
    ScoreText:{    
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
    card: {
      margin: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
      elevation: 4, 
    },
    
    image: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      height: 200,
      width: '100%',
      resizeMode: 'cover',
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
      
    },
    description: {
      fontSize: 14,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginLeft: 135,
      marginTop: 20,
    },
    gridItem: {
      width: '44%',
      height: '40%',
      aspectRatio: 1.5,
      margin: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    circlecard: {
      margin: 10,
      width: 60,
      height: 60,
      borderRadius: 27,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: 3,
    },
    logosbasquete: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    containerNBA: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white',
      marginBottom: 20,
    },
    mainCardNBA: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    mainCardTitleNBA: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    logoNBA: {
      width: 50,
      height: 50,
    },
    cardNBA: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardImageNBA: {
      width: '100%',
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    cardContentNBA: {
      flexDirection: 'column',
    },
    cardTitleNBA: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardSubtitleNBA: {
      fontSize: 16,
      color: '#888',
    },
    containerScroll: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: 'white',
      marginBottom: 20,
    },
    titleScroll: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      marginBottom: 10,
    },
    scrollContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
    teamContainer: {
      alignItems: 'center',
      marginRight: 40,
      margin: 10,
    },
    logo: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
    copy: {
      margin: 10,
    },
    sidebarContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#191918', 
      height: '100%',
      width: 250,
      zIndex: 100,
      elevation: 5,
      paddingTop: 50,
      transition: 'none', 
    },
    sidebarContent: {
      paddingHorizontal: 20,
      marginTop: 20,
    },
    sidebarTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 15,
      marginBottom: 20,
      color: '#f2f2f2', 
    },
    sidebarItem: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(255, 255, 255, 0.2)', 
      flexDirection: 'row',
      alignItems: 'center', 
    },
    sidebarItemText: {
      fontSize: 18,
      color: '#f2f2f2',
      flex: 1, 
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10,
    },
    closeButtonText: {
      fontSize: 16,
      color: '#f2f2f2',
      marginTop: 20,
    },
});

export default styles;
