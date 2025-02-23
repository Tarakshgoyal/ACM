"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false, loading: () => <p>Loading map...</p> });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

let L: typeof import("leaflet") | null = null;
if (typeof window !== "undefined") {
  L = require("leaflet");
}

const locationIcon = L
  ? new L.Icon({
      iconUrl: "/ptr.png",
      iconSize: [30, 30],
    })
  : null;

const locations = [
  {
    position: [30.4177, 77.9768] as [number, number],
    name: "UPES Dehradun",
    type: "university",
    description: "University of Petroleum and Energy Studies",
  },
  {
    position: [30.4156, 77.9722] as [number, number],
    name: "Bidholi",
    type: "area",
    description: "Residential Area",
  },
  {
    position: [30.4200, 77.9800] as [number, number],
    name: "Bidholi Forest",
    type: "nature",
    description: "Protected Forest Area",
  },
];

export default function MapView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Nearby Locations</h1>
      <div className="w-full h-[500px]">
        {typeof window !== "undefined" && (
          <MapContainer center={[30.4177, 77.9768]} zoom={15} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((location, index) => (
              locationIcon && (
                <Marker key={index} position={location.position} icon={locationIcon}>
                  <Popup>
                    <div>
                      <p className="font-semibold">{location.name}</p>
                      <p>{location.description}</p>
                    </div>
                  </Popup>
                </Marker>
              )
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
}
