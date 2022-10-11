import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from "../routineMachine/RoutineMachine";
import store from "../../redux/store";

export const Map = (props) => {
  console.log(store.getState());
  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={[51.505, -0.09]}
      style={{ width: "78vw", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutineMachine />
    </MapContainer>
  );
};
