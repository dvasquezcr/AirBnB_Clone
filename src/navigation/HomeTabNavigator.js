import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "../screens/Home"

import {Fontisto, FontAwesome , FontAwesome5, Feather, EvilIcons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
   return (
    <Tab.Navigator
        tabBarOptions={{
            tabStyle:{backgroundColor:"#fff"},
            activeTintColor: "#f15454"
        }}
    >
        
        <Tab.Screen name={"Home"} component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                )
            }}
        />

        <Tab.Screen name={"Saved"} component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name="heart-o" size={25} color={color} />
                )
            }}
        />

        <Tab.Screen name={"Trips"} component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="airbnb" size={25} color={color} />
                )
            }}
        />

        <Tab.Screen name={"Inbox"} component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={25} color={color} />
                )
            }}
        />

        <Tab.Screen name={"Profile"} component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={25} color={color} />
                )
            }}
        />


    </Tab.Navigator>
   )
};
 
export default HomeTabNavigator;