import React from 'react';
import { View, Text, Image, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native"

import styles from "./styles"
const Post = (props) => {

   const post = props.post

   const navigation = useNavigation();
   const goToPage = () =>{
      navigation.navigate("Post", {postId: post.id})//En el segundo paramemtro se le envia información
   }

   return (
    <Pressable style={styles.container} onPress={goToPage}>
         <Image 
            style={styles.image}
            source = {{ uri: post.image}}
         />

         <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

         <Text style={styles.description} numberOfLines={2}>
               {post.type}. {post.title}
         </Text>

         <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice}</Text>
            <Text style={styles.newPrice}> ${post.newPrice} </Text>
            / night
         </Text>

         <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

    </Pressable>
   )
};
 
export default Post;