'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import classes from './Map.module.css';
import { Container } from '@mantine/core';

interface Props {
  height?: string;
}

const Map = ({ height }: Props) => {
  return (
    <Container className={classes.container} mb="1rem" size="100%">
      <MapContainer
        className={classes.mapContainer}
        center={[51.505, -0.09]}
        zoom={14}
        style={{ height: height || '300px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Region Name</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
