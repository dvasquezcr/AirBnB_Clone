import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabNavigator from "./HomeTabNavigator"

///Components & Screens Imports
import HomeScreen from "../screens/Home";
import DestinationSearchScreen from "../screens/DestinationSearch";
import SearchResultsScreen from "../screens/SearchResults"
import GuestsScreen from "../screens/Guests"

//import Bienvenido from "./ExploreNavigator"
 
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        {/* initialRouteName="Home" */}
       <Stack.Navigator>
            
            <Stack.Screen name={"Home"} 
                  component={HomeTabNavigator}
                  options={{ headerShown: false }}
            />
            <Stack.Screen name={"Destination Search"} 
                  component={DestinationSearchScreen}
                  options={{ title:"Search your destination"}}
            />
            <Stack.Screen name={"Guests"} 
                  component={GuestsScreen}
                  options={{ title:"How many people?"}}
            />
            {/* <Stack.Screen name={"Post"} 
                  component={PostScreen}
                  options={{ title:"Accommodation"}}
            /> */}

       </Stack.Navigator>
    </NavigationContainer>
   )
};
 
export default Router;