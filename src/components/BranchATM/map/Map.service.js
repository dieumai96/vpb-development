/// <reference types="@types/googlemaps" />
import { ZOOM_MAP, googleConfigStyle, LOCATION_INITIAL, MARKER_ICON } from '../../../configs/map';
import MarkerClusterer from '@google/markerclusterer'
let map;
let markers = [];
const google = window.google;
export const initMap = (mapRef) => {
  let position = { ...LOCATION_INITIAL }
  let mapOptions = {
    zoom: ZOOM_MAP,
    center: position,
    mapTypeControl: false,
    styles: googleConfigStyle
  }
  map = new google.maps.Map(mapRef.current, mapOptions);
  return map;
}

export const markerOnMap = (atmList) => {
  if (atmList && atmList.length) {
    atmList.forEach(atm => {
      let position = {
        lat: Number(atm.Latitude),
        lng: Number(atm.Longitude)
      };
      let marker = new google.maps.Marker({ position: position, map: map, icon: MARKER_ICON });
      markers.push(marker);
    });
    new MarkerClusterer(map, markers, {
      imagePath:
        'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    });
  }
}