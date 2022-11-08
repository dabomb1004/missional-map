import React, { useRef } from 'react';
import styled from '@emotion/styled';
import mapboxgl from 'mapbox-gl';

const MAPBOX_CONTAINER_ID = 'mapbox_container';

export default function App() {
  let popup: any = null;
  var map = useRef(null);

  React.useEffect(() => {
    if (map.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHdhbGV4IiwiYSI6ImNsOW5tYXA2ODAwZDYzdXJvOG5tZ3ZiczIifQ.ta2bUUDUuLO5YOK_rgxKAw';
    map.current = new mapboxgl.Map({
      container: MAPBOX_CONTAINER_ID, // container ID
      style: 'mapbox://styles/alexwalex/cl9vyfkrz000014mwehtqslty', // style URL
      // style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 4, // starting zoom
      projection: { name: "globe" },
    });

    map.current.on('style.load', () => {
      map.current.setFog({}); // Set the default atmosphere style
    });

    map.current.on('load', () => {
      map.current.on('click', 'country-boundaries', (e: any) => {
        if (popup) {
          popup.remove();
        }
        popup = new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat([e.lngLat.wrap().lng, e.lngLat.wrap().lat])
          .setHTML(`${e.features[0]?.properties?.name}`)
          .addTo(map.current);

      });
    });

  }, []);

  return (
    <div>
      <div className="sidenav">
        <a href="#">Home</a>
      </div>
      <AppContainer className="mapboxApp">
        <MapContainer id={MAPBOX_CONTAINER_ID} />
      </AppContainer>
    </div>
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

