import React, {useState} from 'react';
import { View,Text, TextInput, FlatList} from 'react-native';
import styles from "./styles"

import searchResults from "../../../assets/data/search"

import { Entypo } from '@expo/vector-icons';
 
const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState("");

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
                <View style={styles.row}> 
                    <View style={styles.iconContainer}>
                        <Entypo name="location-pin" size={30} color="black" />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </View>  
            )}
        />

    </View>
   )
};
 
export default DestinationSearchScreen;