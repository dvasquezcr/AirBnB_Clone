import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
//Navigation
import Router from "./src/navigation/Router"
///Components Imports
import SearchResultSreen from "./src/screens/SearchResults"

export default function App() {
  return (
    <React.Fragment>
        <StatusBar style={"dark"}/>
        
        <SafeAreaView style={styles.container}>
            <Router />
            {/* <SearchResultSreen /> */}
        </SafeAreaView>
    </React.Fragment>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
