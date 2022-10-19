import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import RoutineMachine from "../routineMachine/RoutineMachine";
import store from "../../redux/store";

export const Map = (props) => {
  console.log(store.getState());
  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={[51.50071473765912, -0.12469324682543981]}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutineMachine />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};
