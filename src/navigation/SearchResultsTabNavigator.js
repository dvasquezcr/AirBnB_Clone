import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import SearchResults from "../screens/SearchResults"

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"list"} Component={SearchResults}/>
            <Tab.Screen name={"map"} Component={SearchResults}/>
        </Tab.Navigator>
    )
};
 
export default SearchResultsTabNavigator;