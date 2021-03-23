import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
 
    container:{
        margin:20,
        paddingTop:20,
    },
 
    image:{
        width: "100%",
        aspectRatio: 3/2,
        resizeMode:"cover",
        borderRadius: 10,
    },

    bedrooms:{
        marginVertical: 10,
        color: "#5b5b5b"
    },

    description: {
        fontSize: 18,
        lineHeight: 26,
    }, 

    prices:{
        fontSize: 20,
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
    },

    longDescription:{
        marginVertical: 20,
        fontSize:16,
        lineHeight: 24,
        color: "black"
    },


    });
 
export default styles;