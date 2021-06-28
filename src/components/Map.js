import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import { useState } from "react";
const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={ev.id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAxNn4Eivt2XyPmX_b8wvVHkNT4lD6Zqm0" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && (
        <LocationInfoBox
          info={locationInfo}
          setLocationInfo={setLocationInfo}
        />
      )}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 40.7128,
    lng: 74.006,
  },
  zoom: 3,
};

export default Map;
