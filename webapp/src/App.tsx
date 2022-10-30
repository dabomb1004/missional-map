import React from 'react';
import styled from '@emotion/styled';
import mapboxgl from 'mapbox-gl';
import './App.css';

const MAPBOX_CONTAINER_ID = 'mapbox_container';

export default function App() {
  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHdhbGV4IiwiYSI6ImNsOW5tYXA2ODAwZDYzdXJvOG5tZ3ZiczIifQ.ta2bUUDUuLO5YOK_rgxKAw';
    const map = new mapboxgl.Map({
      container: MAPBOX_CONTAINER_ID, // container ID
      style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 0, // starting zoom
      projection: { name: "globe" },
    });

    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });
  }, []);

  return (
    <AppContainer>
      <MapContainer id={MAPBOX_CONTAINER_ID} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

