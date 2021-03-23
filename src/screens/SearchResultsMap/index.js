import React , { useState, useEffect, useRef } from 'react';
import { View, FlatList, useWindowDimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
//-------------------
import PostCarouselItem from "../../components/PostCarouselItem"
import CustomMarker from "../../components/CustomMarker"
import places from "../../../assets/data/feed"
import { ScreenContainer } from 'react-native-screens';
 
const SearchResultsMap = () => {

   const [ selectedPlaceId, setSelectedPlaceId ] = useState(null);
   const width = useWindowDimensions().width;
   
   const flatlist = useRef();
   const map = useRef();

   //FlatList Carrousel: cuando se mueve el carousel se mueve en el mapa
   const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
   const onViewChanged = useRef(({viewableItems}) => {
      if (viewableItems.length > 0){
         const selectedPlace = viewableItems[0].item
         setSelectedPlaceId(selectedPlace.id)
      }
   })

   useEffect( ()=> {
      //cuando selecciona precio en mapa se mueve el carousel
      if (!selectedPlaceId || !flatlist) {
         return; //si son nulos no hace nada
      }
      const index = places.findIndex( place => place.id === selectedPlaceId )
      flatlist.current.scrollToIndex({ index })

      const selectedPlace = places[index];
      const region = {
         latitude: selectedPlace.coordinate.latitude,
         longitude: selectedPlace.coordinate.longitude,
         latitudeDelta: 0.7,
         longitudeDelta: 0.7,
      }
      map.current.animateToRegion(region);

   },[selectedPlaceId])

   return (
    
    <View style={{width:"100%", height:"100%" }}>
       <MapView
            ref={map}
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
                  onPress ={() => setSelectedPlaceId(place.id)}
              />)
              
           )}
           
        </MapView>

        <View style={{ position: "absolute", bottom:10 }}>
            <FlatList 
               ref={flatlist} //referencia al useRef en UseEffect
               data={places}
               renderItem ={({item}) => <PostCarouselItem post={item} /> }
               horizontal
               showsHorizontalScrollIndicator={false}
               snapToInterval = {width - 40}
               snapToAlignment={"center"}
               decelerationRate={"fast"}
               
               //cuando cambia el carrusel toma como activo el Item 
               //que ocupe el 70% de la pantalla
               //solo admite el valor como useRef 
               viewabilityConfig={viewConfig.current} 
               //Item que se visualiza en pantalla
               onViewableItemsChanged={onViewChanged.current}
            />
            
        </View>
    </View>
   )
};
 
export default SearchResultsMap;