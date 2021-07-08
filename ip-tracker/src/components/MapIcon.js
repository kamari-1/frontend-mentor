import L from "leaflet";
import icon from "../images/icon-location.svg";

const MapIcon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(45, 50),
  className: "map-icon",
});

export default MapIcon;
