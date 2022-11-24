import { useMap } from "react-leaflet";

export function ChangeView({ coord }) {
  console.log("1111111111", coord);
  const map = useMap();
  if (coord[0]) {
    map.setView(coord[0]);
  }

  return null;
}
