import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

export function Map() {
  const polyline = [
    [51.505, -0.09],
    [51.52, -0.09],
  ];

  const limeOptions = { color: "green" };
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>Load</Popup>
      </Marker>
      <Marker position={[51.52, -0.09]}>
        <Popup>Unload</Popup>
      </Marker>
      <Polyline pathOptions={limeOptions} positions={polyline} />
    </MapContainer>
  );
}
