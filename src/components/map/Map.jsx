import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import RoutineMachine from "../routineMachine/RoutineMachine";
import store from "../../redux/store";
import { useSelector } from "react-redux";
import { ChangeView } from "./changeView";

export const Map = (props) => {
  const coordinates = useSelector((state) => state.coordinates);
  console.log("coordinates", coordinates);
  const rMachine = useRef();

  console.log("state", store.getState());
  const [mapCoordinates, setMapCoordinates] = useState(coordinates);

  useEffect(() => {
    console.log("mapCoordinates", mapCoordinates);
    setMapCoordinates([coordinates.start, coordinates.end]);
  }, [coordinates]);

  useEffect(() => {
    if (rMachine.current) {
      // console.log("asd", rMachine.current);
      rMachine.current.setWaypoints(mapCoordinates);
    }
  }, [mapCoordinates, rMachine]);

  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={mapCoordinates.centerMap}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <ChangeView coord={mapCoordinates} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutineMachine ref={rMachine} wayPoints={mapCoordinates} />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};
