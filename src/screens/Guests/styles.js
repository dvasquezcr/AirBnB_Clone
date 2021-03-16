import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
 
    row:{
        top:50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "lightgrey"
    },

    title:{
        fontWeight: "bold",
    },

    subTitle:{
        color: "#8d8d8d",
    },

    bottonsContainer:{
        flexDirection: "row",
        alignItems: "center"
    },

    button: {
        fontSize: 22,
        color: "#474747",
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "lightgrey",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        fontSize: 20,
        color: "#474747",
    },

    buttonCount:{
        marginHorizontal: 20,
        fontSize: 18,
        color: "black"
    }

});
 
export default styles;