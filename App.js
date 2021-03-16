import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

///Components Imports
import HomeScreen from "./src/screens/Home"
import SearchResultSreen from "./src/screens/SearchResults"

import Post from "./src/components/Post"
//DATA
import feed from "./assets/data/feed"

const post1 = feed[1]

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <SafeAreaView>
          {/* <HomeScreen /> */}
          {/* <Post post={post1}/> */}
          <SearchResultSreen />
      </SafeAreaView>
    </View>
  );
}

