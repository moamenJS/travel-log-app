import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [viewState, setViewState] = React.useState({
    latitude: 37.6,
    longitude: -99.665,
    zoom: 3
  });
  return (
    <ReactMapGL
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{
        width: '100vw',
        height: '100vh'
      }}

      mapStyle="mapbox://styles/moamenjs/cl7qhq8yg001z14leelo8v6as"
      mapboxAccessToken={process.env.REACT_APP_MOPBOX_TOKEN}
    >
      <Marker longitude={-100} latitude={40} anchor="bottom" style={{ color: 'yellow' }} >
        <div>You are here!</div>
      </Marker>
    </ReactMapGL>
  );
}

export default App;