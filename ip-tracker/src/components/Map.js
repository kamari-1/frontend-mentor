import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MapIcon from "./MapIcon";

const Map = ({ lat, lng, zoom }) => {
  const [state, setState] = useState([lat, lng]);
  useEffect(() => {
    setState([lat, lng]);
  }, [lat, lng]);

  // Update view
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    state && (
      <MapContainer id="map" center={state} zoom={zoom} scrollWheelZoom={false}>
        <ChangeView center={state} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={state} icon={MapIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
  );
};

export default Map;
