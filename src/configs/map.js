export const ZOOM_MAP = 15;
export const googleConfigStyle = [
  { elementType: 'geometry', stylers: [{ color: '#EFF8F3' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#EFF8F3' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#5F6B79' }] },
  {
    "featureType": "poi.business",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5F6B79' }, { "visibility": "off" }]
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5F6B79' }, { "visibility": "off" }]
  },
  {
    featureType: "transit.station.bus",
    stylers: [{ "visibility": "off" }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#C8EAB6' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5F6B79' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' },]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#ffffff' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5F6B79' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#ffffff' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5F6B79' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }, { "visibility": "off" }]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5F6B79' }, { visibility: "off" }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#A9D3FB' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5F6B79' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#A9D3FB' }]
  }
]

export const LOCATION_INITIAL = {
  lat: 21.015972,
  lng: 105.815111
}

export const MARKER_ICON = "https://i.imgur.com/ZCH1xIw.png";
