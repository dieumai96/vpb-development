/// <reference types="@types/googlemaps" />
import React, { Fragment, useRef, useEffect, useReducer } from 'react';
import { initMap } from './map/Map.service';
import { responseDataList } from './services/BranchATM.service';
import { Subscription } from 'rxjs';
const Map = () => {
  const mapRef = useRef(React.createRef());
  let resSubscription = new Subscription();
  let map;
  useEffect(() => {
    initMap(mapRef);
    responseDataList().subscribe(data => console.log(data));
    return () =>{
    }
  });

  return (
    <Fragment>
     
      <div id="map" ref={mapRef}></div>
    </Fragment>
  )
}

export default Map
