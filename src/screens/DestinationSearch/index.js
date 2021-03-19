import React from 'react';
import { View } from 'react-native';
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"

import SuggestionRow from "./SuggestionRow"




 
const DestinationSearchScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete
            styles={{
                textInput: styles.textInput
            }}
            enablePoweredByContainer={false}
            placeholder="Where are you going?"
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                navigation.navigate("Guests");
            }}
            fetchDetails
            query={{
                key: "AIzaSyACYZdUuc2JDofD6CktLWTCNkuBmhPBbqA",
                language: "en",
                type:"(cities)"
            }}
            suppressDefaultStyles
            renderRow={ (item) => <SuggestionRow item={item} />}
        />
    </View>
   )
};
 
export default DestinationSearchScreen;