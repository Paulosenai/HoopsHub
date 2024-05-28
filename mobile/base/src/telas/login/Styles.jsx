import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191818',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fundo: {
        marginTop: 60,
        padding: 10,
        width: 350,
        height: 400,
      },
      tittle: {
        fontSize: 15,
        textAlign: 'left',
        paddingLeft: 10,
        color: 'white',
      },
      imgLogo: {
        width: 150,
        height: 150,
        marginBottom: 50,
      },
      buttonReg: {
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        fontSize: 10,
        width: 140,
        margin: 5,
      },
      buttonText: {
        fontWeight: "bold",
        fontSize: 17,
        color: 'white',
        
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
        height: 140,
        opacity: 0.7,
        position: 'relative',
      },
      textBall: {
        zIndex: 1,
        position: 'absolute',
        top: 60,
        left: 330,
        color: '#FFFFFF',
        padding: 10,
      }
        
});

export default styles;