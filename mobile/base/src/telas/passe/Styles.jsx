import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      scrollview: {
        flex: 1,
        backgroundColor: 'black'
      },
        card: {
          backgroundColor: '#fff',
          marginBottom: 16,
          elevation: 4, 
        },
        image: {
          borderWidth: 1,
          borderColor: 'black',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          height: 300,
          width: '100%',
          resizeMode: 'cover',
        },
        content: {
          padding: 16,
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        },
        titleContent: {
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        },
        description: {
          fontSize: 14,
        },
        titleCard: {
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 8,
        },
        subtituloCard: {
          fontSize: 13,
          fontWeight: 'bold',
          marginBottom: 8,
        },
      
  });

export default styles;