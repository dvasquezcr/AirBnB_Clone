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
        lineHeight: 20,
    }, 

    prices:{
        fontSize: 18,
        
    },

    oldprice:{
        color: "#5b5b5b",
        textDecorationLine: 'line-through'
    },

    newprice:{
        fontWeight: "bold",
    },

    totalPrice:{
        
    }


    });
 
export default styles;