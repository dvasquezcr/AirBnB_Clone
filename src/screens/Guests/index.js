import React, { useState } from 'react';
import { View, Text, Pressable} from 'react-native';

import styles from "./styles"

const Row = ({ title, subTitle, count, setCount }) => {

    return (
        <View style={styles.row}>
            
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
           
            <View style={styles.bottonsContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => setCount( Math.max(0, count - 1) )}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>

                <Text style={styles.buttonCount}> {count} </Text>

                <Pressable
                    style={styles.button}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

//----------------------------------

const GuestsScreen= () => {
    const [adults, setAdults] = useState(0);
    const [childrens, setChildrens] = useState(0);
    const [infants, setInfants] = useState(0);

  return (
    <View>
       <Row 
            title={"Adults"} 
            subTitle={"Ages 13 or above"} 
            count={adults} setCount={setChildrens} 
       />

        <Row 
            title={"Childrens"} 
            subTitle={"Ages 2 to 12"} 
            count={childrens} setCount={setAdults} 
       />

        <Row 
            title={"Infants"} 
            subTitle={"Ages 0 to 2"} 
            count={infants} setCount={setInfants} 
       />
    </View>
   )
};
 
export default GuestsScreen;