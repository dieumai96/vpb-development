import React, { Fragment, useRef, useEffect } from 'react';
import { initMap, markerOnMap } from './map/Map.service';
import { createStructuredSelector } from 'reselect';
import { selectAtmList } from '../../redux/atm/atm.selector';
import { connect } from 'react-redux';
const Map = ({ atmList }) => {
  const mapRef = useRef(React.createRef());
  let map;
  useEffect(() => {
    initMap(mapRef);
    markerOnMap(atmList);
    return () => {
    }
  });
  return (
    <Fragment>
      <div id="map" ref={mapRef}></div>
    </Fragment>
  )
}
const mapPropsToState = createStructuredSelector({
  atmList: selectAtmList,
})
export default connect(mapPropsToState)(Map);
