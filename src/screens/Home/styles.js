import { StyleSheet, Dimensions } from 'react-native';
 
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 500,
        resizeMode: "cover",
        justifyContent: "center",
        
        flex: 1,
        flexDirection:"column"
    },

    containerTitle:{
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: 150,
    },

    title:{
        width:"100%",
        fontSize: 38,
        fontWeight: "bold",
        color:"#fff",
        letterSpacing: -1,
        //paddingTop: 20,
        
    },

    button:{
        width:"75%",
        height: 40,
        borderRadius: 10,
        marginTop:20,
        backgroundColor:"#fff",
        
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