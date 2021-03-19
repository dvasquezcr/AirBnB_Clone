import React from 'react';
import { View, Text} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
 
const SearchResultsMap = () => {
   return (
    <View style={{width:"100%", height:"100%" }}>
       <MapView
            provider={PROVIDER_GOOGLE}
            style={{width:"100%", height:"100%" }}
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
           <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
              <View style={{
                 backgroundColor: "white",
                 padding: 5,
                 borderRadius: 20,
                 borderColor: "grey",
                 borderWidth: 1

               }}>
                 <Text style={{fontWeight:"bold"}}>$300</Text>
              </View>
           </Marker>
        </MapView>
    </View>
   )
};
 
export default SearchResultsMap;