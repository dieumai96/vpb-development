/// <reference types="@types/googlemaps" />
import React, { Fragment, useRef, useEffect } from 'react';
import { ZOOM_MAP, googleConfigStyle, LOCATION_INITIAL } from '../../configs/map';

const Map = () => {
  const mapRef = useRef(React.createRef());
  const google = window.google;
  let map;
  useEffect(() => {
    console.log(mapRef);
    initMap();
  }, []);

  const initMap = () => {
    let position = { ...LOCATION_INITIAL }
    let mapOptions = {
      zoom: ZOOM_MAP,
      center: position,
      mapTypeControl: false,
      styles: googleConfigStyle
    }
    map = new google.maps.Map(mapRef.current, mapOptions)
  }
  
  return (
    <Fragment>
      <div id="map" ref={mapRef}></div>
    </Fragment>
  )
}

export default Map
