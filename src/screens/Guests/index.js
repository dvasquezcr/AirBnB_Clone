import React, { useState } from 'react';
import { View, Text, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native"

import styles from "./styles"

import SearchResults from "../SearchResults"



{/* ---------------------- Row 1 ------------------------ */}
const RowAdults = () => {

    const [adults, setAdults] = useState(0);

    return (
        <View style={styles.row}>
            
            <View>
                <Text style={styles.title}>Adults</Text>
                <Text style={styles.subTitle}>Ages 13 or above</Text>
            </View>
           
            <View style={styles.bottonsContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => setAdults( Math.max(0, adults - 1) )}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>

                <Text style={styles.buttonCount}> {adults} </Text>

                <Pressable
                    style={styles.button}
                    onPress={() => setAdults(adults + 1)}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            
        </View>
    )
}


{/* ---------------------- Row 2 ------------------------ */}
const RowChildrens = () => {

    const [childrens, setChildrens] = useState(0);

    return (
        <View style={styles.row}>
            
            <View>
                <Text style={styles.title}>Childrens</Text>
                <Text style={styles.subTitle}>Ages 2 to 12</Text>
            </View>
           
            <View style={styles.bottonsContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => setChildrens( Math.max(0, childrens - 1) )}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>

                <Text style={styles.buttonCount}> {childrens} </Text>

                <Pressable
                    style={styles.button}
                    onPress={() => setChildrens(childrens + 1)}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

{/* ---------------------- Row 3 ------------------------ */}
const RowInfants = () => {

    const [infants, setInfants] = useState(0);

    return (
        <View style={styles.row}>
            
            <View>
                <Text style={styles.title}>Infants</Text>
                <Text style={styles.subTitle}>Under 2</Text>
            </View>
           
            <View style={styles.bottonsContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => setInfants( Math.max(0, infants - 1) )}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>

                <Text style={styles.buttonCount}> {infants} </Text>

                <Pressable
                    style={styles.button}
                    onPress={() => setInfants(infants + 1)}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

//----------------------------------

const GuestsScreen= () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View>
                <RowAdults />
                
                <RowChildrens />

                <RowInfants />
            </View>

            <Pressable 
                    style={styles.buttonSearch} 
                    // onPress={()=> 
                    //     navigation.navigate("Home",{
                    //         screen: "Explora",
                    //         param: { screen: "Search"}
                    // }) }
                    onPress={()=> 
                        navigation.navigate("SearchResults"
                    ) }
            >
                <Text style={{fontSize: 20, color:"white", fontWeight:"bold"}}>Search</Text>
            </Pressable>

        </View>
    )
};
 
export default GuestsScreen;