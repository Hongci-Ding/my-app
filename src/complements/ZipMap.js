import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';
import {Layer} from 'react-map-gl';
import {Source} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const MAPBOX_TOKEN = 'pk.eyJ1IjoidW5pdW5pbWFwIiwiYSI6ImNsMXI0aG0zazBlOTQzb3FxODRkbmJmeDQifQ.KSEmykMkOBdokzdvYt26UA';

const geojson = {
  type: 'FeatureCollection',
  features: [
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
  ]
};


const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};

function ZipMap(){
  var [viewState, setViewState] = React.useState({
    latitude: 49.2,
    longitude: -123.1,
    zoom: 14,
    source: "mapbox.boundaries-pos3-v3"
  });

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v8"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
    <Marker longitude={-123.1} latitude={49.2} anchor="bottom" color='red'/>
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </Map>
  );

}

export default ZipMap