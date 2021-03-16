import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
 
    container:{
        margin:20,
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
    }


    });
 
export default styles;