import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';
import {Layer} from 'react-map-gl';
import {Source} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const MAPBOX_TOKEN = 'pk.eyJ1IjoidW5pdW5pbWFwIiwiYSI6ImNsMXI0aG0zazBlOTQzb3FxODRkbmJmeDQifQ.KSEmykMkOBdokzdvYt26UA';

function BoundaryMap(){
    const [viewState, setViewState] = React.useState({
        latitude: 49.2,
        longitude: -123.1,
        zoom: 14
      });
    
      return (
        <Map
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          style={{width: 800, height: 600}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <Marker longitude={-123.1} latitude={49.2} color="blue" />
        </Map>
      );
}
export default BoundaryMap