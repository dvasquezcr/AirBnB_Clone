import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

///Components Imports
import HomeScreen from "./src/screens/Home"
import Post from "./src/components/Post"

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <SafeAreaView>
          {/* <HomeScreen /> */}
          <Post />
      </SafeAreaView>
    </View>
  );
}

