import React from 'react';
import { View } from 'react-native';
import { useRoute } from "@react-navigation/native"

import Post from "../../components/PostDetailed"

import places from "../../../assets/data/feed"



const PostScreen = () => {
   const route = useRoute();

   //const post = places[route.params.postId];
   const post = places.find(place => place.id === route.params.postId);

   return (
    <View>
       <Post post={post} />
    </View>
   )
};
 
export default PostScreen;