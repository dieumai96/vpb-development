/// <reference types="@types/googlemaps" />
import { ZOOM_MAP, googleConfigStyle, LOCATION_INITIAL } from '../../../configs/map';
let map;
export const initMap = (mapRef) => {
  const google = window.google;
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