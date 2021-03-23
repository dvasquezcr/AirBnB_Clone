import React  from 'react';
import { View, Text, Image, Pressable, useWindowDimensions} from 'react-native';
import { useNavigation } from "@react-navigation/native"

import styles from "./styles"

const Post= (props) => {

   const post = props.post;
   const width = useWindowDimensions().width;

   const navigation = useNavigation();
   const goToPostPage = () =>{
      navigation.navigate("Post", {postId: post.id})//En el segundo paramemtro se le envia información
   }

   return (
    <Pressable onPress={goToPostPage} style={ styles.container, { width: width - 40, paddingLeft: 5 }}>
       <View style={styles.innerContainer}>
            <Image 
               style={styles.image}
               source = {{ uri: post.image}}
            />

               <View style={{flex: 1, marginHorizontal: 10}}>
                  <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

                  <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                  </Text>

                  <Text style={styles.prices}>
                     <Text style={styles.newPrice}>${post.newPrice} </Text>
                     / night
                  </Text>
               </View>
         </View>
    </Pressable>
   )
};
 
export default Post;