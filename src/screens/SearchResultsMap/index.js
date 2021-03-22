import React , { useState} from 'react';
import { View, FlatList, useWindowDimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
//-------------------
import PostCarouselItem from "../../components/PostCarouselItem"
import CustomMarker from "../../components/CustomMarker"
import places from "../../../assets/data/feed"
import { ScreenContainer } from 'react-native-screens';
 
const SearchResultsMap = () => {

   const [ selectedPlaceId, setselectedPlaceId ] = useState(null)
   const width = useWindowDimensions().width;

   return (
    
    <View style={{width:"100%", height:"100%" }}>
       <MapView
            provider={PROVIDER_GOOGLE}
            style={{width:"100%", height:"100%" }}
            initialRegion={{
               latitude: 28.3279822,
               longitude: -16.5124847,
               latitudeDelta: 0.8,
               longitudeDelta: 0.8,
            }}
        >

           {places.map(place => (
              <CustomMarker 
                  coordinate = {place.coordinate}
                  price = {place.newPrice}
                  isSelected={place.id === selectedPlaceId}
                  onPress ={() => setselectedPlaceId(place.id)}
              />)
              
           )}
           
        </MapView>

        <View style={{ position: "absolute", bottom:10 }}>
            <FlatList 
               data={places}
               renderItem ={({item}) => <PostCarouselItem post={item} /> }
               horizontal
               showsHorizontalScrollIndicator={false}
               snapToInterval = {width - 40}
               snapToAlignment={"center"}
               decelerationRate={"fast"}
            />
            
        </View>
    </View>
   )
};
 
export default SearchResultsMap;