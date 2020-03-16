/// <reference types="@types/googlemaps" />
import { ZOOM_MAP, googleConfigStyle, LOCATION_INITIAL, MARKER_ICON } from '../../../configs/map';
import MarkerClusterer from '@google/markerclusterer'
let map;
let markers = [];
let infowindow;
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
  clearMarkers();
  if (atmList && atmList.length) {
    atmList.forEach(atm => {
      let atmInfomation = {
        lat: Number(atm.Latitude),
        lng: Number(atm.Longitude),
        ...atm
      };
      let marker = new google.maps.Marker({ position: atmInfomation, map: map, icon: MARKER_ICON });
      marker.addListener('click', function () {
        clickToMarker(atmInfomation, marker);
      })
      markers.push(marker);
    });
    new MarkerClusterer(map, markers, {
      imagePath:
        'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    });
  }
}

export const clearMarkers = () => {
  for (let lp = 0; lp < markers.length; lp++) {
    markers[lp].setMap(null);
  }
  markers = [];
}

export const clickToMarker = (markerInfomation, marker) => {
  if (infowindow) {
    infowindow.close();
  }
  infowindow = new google.maps.InfoWindow({
    content: addInfoWindowContent(markerInfomation),
    maxWidth: 240
  });
  infowindow.open(map, marker);
}

const addInfoWindowContent = ({ Name, Address, Phone }) => {
  let contentWindow = `<div id="content"> \
    <div class="site-notice"> \
      ${
    Name == null ? '' : `<span class="first-heading" class="firstHeading">${Name}</span>`
    }
    </div>  \
      <div class="body-content"> \
        ${
    Address == null ? '' : `<p class = "address-detail"> ${Address} </p>`
    }
        <p style = "display : ${(Phone != "null" && Phone != null) ? 'initial' : 'none'}">Điện thoại: ${Phone} </p> \
      </div> \
  </div>`;
  return contentWindow;
}
