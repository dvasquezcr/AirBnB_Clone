import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabNavigator from "./HomeTabNavigator"

///Components & Screens Imports
import HomeScreen from "../screens/Home";
import DestinationSearchScreen from "../screens/DestinationSearch";
import SearchResultsScreen from "../screens/SearchResults"
import GuestsScreen from "../screens/Guests"


 
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        {/* initialRouteName="Home" */}
       <Stack.Navigator screenOptions={{ headerShown: false}}>
            
          <Stack.Screen name={"Home"} component={HomeTabNavigator}/>
          <Stack.Screen name={"Destination Search"} component={DestinationSearchScreen}/>
          <Stack.Screen name={"Search"} component={SearchResultsScreen}/>
          <Stack.Screen name={"Guests"} component={GuestsScreen}/>

       </Stack.Navigator>
    </NavigationContainer>
   )
};
 
export default Router;