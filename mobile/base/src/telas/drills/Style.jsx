import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      scrollview: {
        flex: 1,
        backgroundColor: 'black'
      },
      item: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#eee',
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
      newsCard: {
        marginBottom: 20, 
    },
    newsImage: {
      width: '100%',
      height: 230,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5,
      borderColor: 'white',
      borderWidth: 1,
  },
    imageTextContainer: {
      position: 'absolute', 
      justifyContent: 'center',
      alignItems: 'center', 
    },
  imageText: {
    color: '#fff', 
    fontSize: 30, 
    fontWeight:'bold',
  },
  newsContent: {
    height: 60,  
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: 'black',
    textAlign: 'center',
},
textContent: {
  textAlign: "center",
  fontSize: 12,
  color: 'white',
  margin: 15,
  fontWeight: 'bold'
},
container: {
  flex: 1,
  backgroundColor: '#fff',
},
header: {
  height: 50,
  backgroundColor: '#f0f0f0',
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
headerText: {
  fontSize: 20,
  fontWeight: 'bold',
},
categoriesList: {
  flex: 1,
  padding: 10,
},
categoryItem: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  borderBottomWidth: 1,
  borderColor: '#eee',
},
categoryImage: {
  width: 50,
  height: 50,
  marginRight: 10,
},
categoryName: {
  fontSize: 18,
},
gifStyle: {
 width: '100%',
 height: 240,
 borderWidth: 1,
},
      
  });

export default styles;