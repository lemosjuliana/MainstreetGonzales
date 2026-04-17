import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';

const blocks = [
  [
    [29.5066282, -97.4550144], // Coordinate 1
    [29.5075044, -97.4528759], // Coordinate 2
    [29.5052722, -97.4518593], // Coordinate 3
    [29.5051035, -97.4523605], // Coordinate 4
    [29.5024708, -97.4511912], // Coordinate 5
    [29.5025644, -97.4509094], // Coordinate 6
    [29.5023703, -97.4508267], // Coordinate 7
    [29.5024367, -97.4506117], // Coordinate 8
    [29.5012277, -97.4500600], // Coordinate 9
    [29.5010656, -97.4505256], // Coordinate 10
    [29.5009833, -97.4504838], // Coordinate 11
    [29.5007296, -97.4511935], // Coordinate 12
    [29.4998024, -97.4507688], // Coordinate 13
    [29.4986283, -97.4541472], // Coordinate 14
    [29.5026339, -97.4559385], // Coordinate 15
    [29.5032042, -97.4542560], // Coordinate 16
    [29.5054181, -97.4552327], // Coordinate 17
    [29.5055989, -97.4547067], // Coordinate 18
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
