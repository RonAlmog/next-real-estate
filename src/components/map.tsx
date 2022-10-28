import React from "react";
import { useRef, useState } from "react";
import Link from "next/link";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  ViewState,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "./pin";
import { map } from "@firebase/util";

interface IProps {}
const token = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;

const MapComp = (props: IProps) => {
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState<ViewState>({
    latitude: 44,
    longitude: -79,
    zoom: 10,
    bearing: 0,
    pitch: 0,
    padding: { top: 5, bottom: 5, left: 5, right: 5 },
  });
  return (
    <div className="text-black relative" id="map">
      <Map
        ref={mapRef}
        initialViewState={{
          latitude: 44,
          longitude: -79,
          zoom: 10,
          bearing: 0,
          pitch: 0,
        }}
        minZoom={5}
        maxZoom={15}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={token}
        onMoveEnd={(x) => {
          console.log("move!", x);
        }}
      >
        <Marker longitude={-122.4} latitude={37.8} color="green">
          <Pin />
        </Marker>
        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
        <ScaleControl />
      </Map>
    </div>
  );
};

export default MapComp;
