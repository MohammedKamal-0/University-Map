"use client";
import React from 'react'
import { GoogleMap , useJsApiLoader } from '@react-google-maps/api';
import './map.module.css'
export default function Map() {



const containerStyle = {
    width:"100%",
    height:"80vh"
};


const center = {
    lat: 33.27579244430432,
    lng: 44.38068357605743
};

const {isLoaded} = useJsApiLoader({
    id:"ffac7e8b13769385",
    googleMapsApiKey:"AIzaSyABbPoj28F4Wwx89E962Ez80Ka839JDXOk",
});

const [map , setMap] = React.useState(null);

const onLoad = React.useCallback(function useCallback(map){
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
},[]);


const onUnmount = React.useCallback(function useCallback(map){
  setMap(null);
},[]);

return isLoaded ?(
  
  <div className='relative'><GoogleMap  
  mapContainerStyle={containerStyle}
  center={center}
  zoom={16}
  onLoad={onLoad}
  onUnmount={onUnmount}
  >
    <></>
  </GoogleMap> </div>
):(
  <></>
);
}
