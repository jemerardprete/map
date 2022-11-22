import React, { useEffect, useState } from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map() {

    const [position, updatePosition] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setTimeout(() => {
                updatePosition([position.coords.latitude, position.coords.longitude])
            }, 1000)
        });
    }, [])

    return position ?
        <MapContainer className="mapContainer" center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
            </Marker>
        </MapContainer>
        : <div>En attente</div>;
}

export default Map;
