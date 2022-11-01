import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import RoutineMachine from "../routineMachine/RoutineMachine";
import store from "../../redux/store";

export const Map = () => {
  let coordinates = useSelector((state) => state.coordinates);
  console.log("state", store.getState());
  console.log("coordinates", coordinates);
  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={coordinates.centerMap}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutineMachine coordinates={coordinates} />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};
