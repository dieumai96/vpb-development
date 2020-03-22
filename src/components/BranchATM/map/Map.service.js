/// <reference types="@types/googlemaps" />
import { ZOOM_MAP, googleConfigStyle, LOCATION_INITIAL, MARKER_ICON } from '../../../configs/map';
let map;
let markers = [];
let infowindow;
const google = window.google;
export const initMap = (mapRef, zoom = ZOOM_MAP) => {
  let position = { ...LOCATION_INITIAL }
  let mapOptions = {
    zoom: zoom,
    center: position,
    mapTypeControl: false,
    styles: googleConfigStyle
  }
  map = new google.maps.Map(mapRef.current, mapOptions);
  return map;
}

export const markerOnMap = (atmList) => {
  clearMarkers();
  if (atmList.listData && atmList.listData.length) {
    atmList.listData.forEach(atm => {
      let atmInfomation = {
        lat: Number(atm.Latitude),
        lng: Number(atm.Longitude),
        ...atm
      };
      let marker = generateMarker(atmInfomation);
      marker.addListener('click', function () {
        clickToMarker(atmInfomation, marker);
      })
      markers.push(marker);
    });
    if (atmList.headQuarters && atmList.headQuarters.length) {
      // INFO : if have headQuartes
      activeHeadQuarters(atmList.headQuarters);
    } else {
      // INFO: if not have head quarters, set map center to first response ;
      let firstAtm = { ...atmList.listData[0], lat: Number(atmList.listData[0].Latitude), lng: Number(atmList.listData[0].Longitude) };
      setMapCenter(firstAtm);
    }
  }
}

export const generateMarker = (atmInfomation) => {
  return new google.maps.Marker({ position: atmInfomation, map: map, icon: MARKER_ICON });
}

export const clearMarkers = () => {
  for (let lp = 0; lp < markers.length; lp++) {
    markers[lp].setMap(null);
  }
  markers = [];
}

const activeHeadQuarters = (headquarters) => {
  let head = headquarters[0];
  let atmInfomation = {
    lat: Number(head.Latitude),
    lng: Number(head.Longitude),
    ...head
  };
  let marker = generateMarker(atmInfomation);
  clickToMarker(atmInfomation, marker);
}

export const clickToMarker = (markerInfomation, marker) => {
  setMapCenter(markerInfomation);
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


const setMapCenter = ({ lat, lng }) => {
  map.setCenter({ lat, lng });
}