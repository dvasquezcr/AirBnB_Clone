import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/Home"
import SearchResultsScreen from "../screens/SearchResults"
import SearchResultsTabNavigator from "./SearchResultsTabNavigator"
 
const ExploreNavigator = (props) => {

    const Stack = createStackNavigator();

   return (
    <Stack.Navigator>   
        
        <Stack.Screen 
            name={"Welcome"} 
            component={HomeScreen}
            options={{ headerShown: false }}
        />

        <Stack.Screen 
            name={"SearchResults"} 
            component={SearchResultsTabNavigator}
            options = {{ title:"Busca tu destino" }}
        />

    </Stack.Navigator>

   )
};
 
export default ExploreNavigator;