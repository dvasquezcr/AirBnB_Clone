import { StyleSheet, Dimensions } from 'react-native';
 
const styles = StyleSheet.create({
 
    container:{
       height: 120,
       paddingLeft: 5,
       
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 5,
       },
       shadowOpacity: 0.34,
       shadowRadius: 6.27,
       
       elevation: 10,
    },
 
    innerContainer: {
        flexDirection:"row",
        backgroundColor: "white",
        borderRadius: 10,
        overflow: "hidden",
    },

    image:{
        height: "100%",
        aspectRatio: 1,
        resizeMode:"cover",
    },

    bedrooms:{
        marginVertical: 10,
        color: "#5b5b5b"
    },

    description: {
        fontSize: 15,
        lineHeight: 26,
    }, 

    prices:{
        fontSize: 15,
        color: "black",
        marginVertical: 10,
    },

    oldPrice:{
        color: "#5b5b5b",
        textDecorationLine: 'line-through',
        fontWeight: "bold",
    },

    newPrice:{
        color: "black",
        fontWeight: "bold",
    },

    totalPrice:{
        color: "#5b5b5b",
        textDecorationLine: "underline",
        fontSize: 16,
    }


    });
 
export default styles;