
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
  },
  newsCard: {
    marginBottom: 20, 
},
newsImage: {
  width: '100%',
  height: 230,
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
},
textContent: {
  fontSize: 12,
  color: 'white',
  margin: 15,
  fontWeight: 'bold',
 
},

  container: { 
    flex: 1, 
    padding: 10, 
    paddingTop: 30, 
    backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
      elevation: 4,
      margin: 10,
      
  },
  containerTitle: { 
    flex: 1, 
    padding: 15, 
    paddingTop: 30,
  },
  headerRow: { 
    flexDirection: 'row', 
    borderBottomWidth: 1,
    borderColor: '#ccc', 
    paddingBottom: 10,
    borderTopWidth: 1,
    paddingTop: 10,
    margin: 10,
  },
  row: { 
    flexDirection: 'row', 
    borderBottomWidth: 1,
    borderColor: '#ccc', 
    paddingVertical: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  headerItem: { 
    flex: 1, 
    fontWeight: 'bold',

  },
  item: { 
    flex: 1, 
    textAlign: 'center',
    
  },
  itemName: { 
    flex: 1, 
    textAlign: 'center',
    fontWeight: "bold",
    margin: 10,
  },
  image: { 
    width: 50, 
    height: 50, 
    borderRadius: 25 
  },
  titleP: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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