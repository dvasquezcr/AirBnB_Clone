import React from 'react';
import { View, Text, Image} from 'react-native';

import styles from "./styles"
const Post= () => {
  return (
    <View style={styles.container}>
         <Image 
            style={styles.image}
            source = {{ uri:"https://revistasumma.com/wp-content/uploads/2019/09/airbnb-1080x675.jpg"}}
         />

         <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

         <Text style={styles.description} numberOfLines={2}>
            Bright room in the heart of the city. 
            Bright room in the heart of the city. 
            Bright room in the heart of the city.
         </Text>

         <Text style={styles.prices}>
            <Text style={styles.oldPrice}>$36</Text>
            <Text style={styles.newPrice}> $30 </Text>
            / night
         </Text>

         <Text style={styles.totalPrice}>$230 total</Text>

    </View>
   )
};
 
export default Post;