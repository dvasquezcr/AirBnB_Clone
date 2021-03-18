import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

import { AntDesign } from '@expo/vector-icons'; 
 
const HomeScreen = () => {

    const navigation = useNavigation();

  return (
    <View>
        
        <Pressable 
                style={styles.searchButton}
                onPress={() => navigation.navigate("Destination Search") }
            >
                <AntDesign name="search1" size={24} color="red" />

                <Text style={styles.searchButtonText}>¿A dónde vas?</Text>
            </Pressable>
            
       <ImageBackground 
            style={styles.image}
            source={require("../../../assets/images/wallpaper.jpg")} 
       >
            

           <View style={styles.containerTitle}>

                <Text style={styles.title}>Siéntete un turista cerca de tu casa</Text>

                <Pressable 
                    style={styles.button}
                    onPress={() => console.warn("Explore Btn Clicked")}
                >
                    <Text style={styles.buttonText}>Explora alojamientos cercanos</Text>
                </Pressable>
           
           </View>
          

       </ImageBackground>
    </View>
   )
};
 
export default HomeScreen;

