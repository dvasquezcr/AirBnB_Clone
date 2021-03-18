import React, {useState} from 'react';
import { View,Text, TextInput, FlatList, Pressable} from 'react-native';
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

import searchResults from "../../../assets/data/search"

import { Entypo } from '@expo/vector-icons';
 
const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState("");
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
       
       <TextInput 
            style={styles.textInput}
            placeholder="¿A dónde vas?"
            value={inputText}
            onChangeText={setInputText}
       />

        <FlatList 
            data ={searchResults}
            renderItem = {({item}) => (
                <Pressable style={styles.row} onPress={()=> navigation.navigate("Guests") }>
                    <View style={styles.iconContainer}>
                        <Entypo name="location-pin" size={30} color="black" />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </Pressable> 
            )}
        />

    </View>
   )
};
 
export default DestinationSearchScreen;