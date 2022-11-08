import React from 'react';
import styled from '@emotion/styled';
import mapboxgl from 'mapbox-gl';
import services from "./services";
import data from "./types/countries";
import { useEffect } from "react";

const MAPBOX_CONTAINER_ID = 'mapbox_container';

export default function App() {

  //console.log((services.get("us")));//change to fetch
  let popup: any = null;

  React.useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHdhbGV4IiwiYSI6ImNsOW5tYXA2ODAwZDYzdXJvOG5tZ3ZiczIifQ.ta2bUUDUuLO5YOK_rgxKAw';
    const map = new mapboxgl.Map({
      container: MAPBOX_CONTAINER_ID, // container ID
      style: 'mapbox://styles/alexwalex/cl9vyfkrz000014mwehtqslty', // style URL
      // style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 4, // starting zoom
      projection: { name: "globe" },
    });

    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });

    map.on('load', () => {
      map.on('click', 'country-boundaries', (e: any) => {
        if (popup) {
          popup.remove();
        }
        popup = new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat([e.lngLat.wrap().lng, e.lngLat.wrap().lat])
          .setHTML(`${e.features[0]?.properties?.name}`)
          .addTo(map);

        const api = async () => {
          var id = e.features[0]?.properties["iso_3166_1"];
          const data = await fetch(`http://api.joshuaproject.net/v1/countries/${id}.json?api_key=60dac3ed6d25`, {
            method: "GET"
          });
          const jsonData = await data.json();
          console.log(jsonData[0]["Capital"]);
        };

        api();

        console.log(e.features[0]?.properties["iso_3166_1"]);
      });
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

