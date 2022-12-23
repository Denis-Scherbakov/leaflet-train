import { useMap } from "react-leaflet";

export function ChangeView({ coord }) {
  const map = useMap();
  if (coord[0]) {
    map.setView(coord[0]);
  }

  return null;
}
