import React from 'react';
import { View, FlatList} from 'react-native';

import Post from "../../components/Post"
import feed from "../../../assets/data/feed"

import SearchResultsTabNavigator from "../../navigation/SearchResultsTabNavigator"
 
const SearchResultSreen= () => {
  return (
    <View>
       {/* <SearchResultsTabNavigator /> */}
       <FlatList 
            data={feed}
            renderItem ={({item}) => <Post post={item} />}
       />
    </View>
   )
};
 
export default SearchResultSreen;