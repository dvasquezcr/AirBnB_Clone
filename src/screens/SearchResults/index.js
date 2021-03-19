import React from 'react';
import { View, FlatList, Text} from 'react-native';

import Post from "../../components/Post"
import feed from "../../../assets/data/feed"

const SearchResultSreen= () => {
  return (
   <View>
      <FlatList 
         data={feed}
         renderItem ={({item}) => <Post post={item} />}
      />
   </View>
   )
};
 
export default SearchResultSreen;