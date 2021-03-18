import { StyleSheet, Dimensions } from 'react-native';
 
const styles = StyleSheet.create({

    container:{
        width: "100%",
        height: Dimensions.get("screen").height,
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },

    containerTitle:{
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        //marginTop: 150,

        justifyContent: "center",
        
    },

    title:{
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: 38,
        fontWeight: "bold",
        color:"#fff",
        letterSpacing: -1,
    },

    button:{
        width:"70%",
        height: 40,
        borderRadius: 10,
        marginTop:20,
        backgroundColor:"#fff",
        marginLeft: "5%",
        alignSelf:"flex-start",
        //centrar el texto
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText:{
        fontSize: 16,
        fontWeight: "600",
    },

    searchButton:{
        backgroundColor:"#fff",
        width:Dimensions.get("screen").width - 20,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position:"absolute",
        top: 50,
        //marginTop: 70,
        zIndex: 100,
    },

    searchButtonText:{
        fontSize: 16,
        fontWeight: "600",
    }

});
 
export default styles;