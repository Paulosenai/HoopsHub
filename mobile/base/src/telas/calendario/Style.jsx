
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 
  newsCard: {
    marginBottom: 20, 
    borderBottomWidth: 2,
    borderBottomColor: 'red',
},
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  newsImage: {
    width: '100%',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
},
  scrollContent: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  imageTextContainer: {
    imageTextContainer: {
      position: 'absolute', 
      justifyContent: 'center',
      alignItems: 'center', 
    },
  },
  imageText: {
    color: '#fff', 
    fontSize: 40, 
    fontWeight:'bold',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
    color: 'black',
  },
  gamesContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },

  gameContainerOTE: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 10,
    marginBottom: 10,
  },
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gameItemOTE: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  championWinner: {
    resizeMode: 'contain',
    
  },
  text: {
    marginTop: 10,
    fontSize: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: "center",
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: '95%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  timeText: {
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
  ScoreTextChamp:{    
    marginTop:14,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    table: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 1,
      marginBottom: 20,
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    columnHeader: {
      flex: 1,
      textAlign: 'center',
    },
    headerWnba: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    teamInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    teamWnba: {
      margin: 5,
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    teamName: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    record: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },
    containerPlayoffs: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 20,
    },
    sectionTitlePlayoffs: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    playoffBracket: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
    },
    gameItemPlayoffs: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    finalGameItemPlayoffs: {
      alignItems: 'center',
    },
    teamImagePlayoffs: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
    vsTextPlayoffs: {
      marginHorizontal: 10,
      fontSize: 18,
      fontWeight: 'bold',
    },
    timeTextPlayoffs: {
      fontSize: 16,
      marginLeft: 10,
    },
    vsLine: {
      width: 2,
      height: 100,
      backgroundColor: '#ccc',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -50,
    },
    BracketLines: {
      flexDirection: 'column',
      alignItems: 'center',
      display: 'flex',
    },
    branch: {
      border: 2, 
      
    },
    containerScroll: {
      flex: 1,
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