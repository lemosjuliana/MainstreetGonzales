import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';

const blocks = [
  [
    [29.5067, -97.4565], // North-west
    [29.5075, -97.4536], // North-east
    [29.5004, -97.4508], // South-east
    [29.4998, -97.4537], // South-west
  ],
];

export default function Map() {
  return (
    <section style={{ padding: '2rem 0' }}>
      <h1 className="map-title"><span className="map-title-highlight">Navigate</span> Gonzales Main Street</h1>
      <p className="map-description">The Gonzales Main Street program aims to create an experience-rich environment while preserving the beautiful historic features of our downtown. Our vision is for Gonzales to become a destination for those seeking a unique, friendly small-town atmosphere and keeping our role in Texas History alive.</p>

      <MapContainer
        center={[29.5035, -97.4535]}
        zoom={15}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {blocks.map((block, index) => (
          <Polygon
            key={index}
            positions={block}
            pathOptions={{
              color: 'OrangeRed',
              fillColor: 'OrangeRed',
              fillOpacity: 0.4,
            }}
          />
        ))}
      </MapContainer>

      <style>{`
        .map-title {
          padding: 1rem 2rem;
          font-family: 'IBM Plex Serif', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          text-align: left;
        }

        .map-title-highlight {
          color: #BE400E;
        }

        .map-description {
          padding: 1rem 2rem;
          text-align: left;
          margin-bottom: 2rem;
        }
      `}</style>
    </section>
  );
}
