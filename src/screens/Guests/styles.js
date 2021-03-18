import { StyleSheet, Dimensions } from 'react-native';
 
const styles = StyleSheet.create({
 
    container:{
        height: "100%", //Dimensions.get("window").height,
        //height:"100%",
        justifyContent:"space-between",
    },

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
    },

    buttonSearch:{
        backgroundColor:"#f15454",
        alignItems: "center",
        justifyContent: "center",
        height:50,
        marginHorizontal:20,
        marginBottom: 20,
        borderRadius: 10,
    },

});
 
export default styles;