import React from 'react';
import './App.css';
import L from 'leaflet';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} id="map" >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </header>
    </div>
  );
}

export default App;
