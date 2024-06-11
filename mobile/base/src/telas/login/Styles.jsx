import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191818',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fundo: {
        marginTop: 30,
        padding: 10,
        width: 390,
        height: 560,
      },
      tittle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10,
        color: 'white',
      },
    
      buttonReg: {
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        fontSize: 10,
        width: 120,
        margin: 5,
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: 17,
        color: 'white',
      },
      remember: {
        fontWeight: "bold",
        fontSize: 17,
        color: 'white',
        margin: 10,
        marginLeft: 11,
        borderBottomColor: 'white',
        width: '40%',
        borderWidth: 1,
      },
      buttonCont: {
        backgroundColor: '#FF7A00',
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        borderRadius: 100,
        width: 150,
        margin: 5,
      },
      botao: {
        flexDirection: "row"
      },
      backgroundbola: {
        height: 100,
        opacity: 0.7,
        position: 'relative',
      },
      textBall: {
        zIndex: 1,
        position: 'absolute',
        top: 20,
        left: 330,
        color: '#FFFFFF',
        padding: 10,
      },
      containerImg: {
        marginTop: 60,
        height: '100%',
        alignItems: "center",
      },
      imgLogo: {
        resizeMode: "contain",
        width: 200,
        height: 200,
      }
        
});

export default styles;