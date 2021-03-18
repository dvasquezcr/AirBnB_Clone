import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabNavigator from "./HomeTabNavigator"

///Components & Screens Imports
import HomeScreen from "../screens/Home";
import DestinationSearchScreen from "../screens/DestinationSearch";


 
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        {/* initialRouteName="Home" */}
       <Stack.Navigator
            screenOptions={{ headerShown: false}}>
            
            <Stack.Screen name={"Home"} component={HomeTabNavigator}/>
            <Stack.Screen name={"Destination Search"} component={DestinationSearchScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
   )
};
 
export default Router;