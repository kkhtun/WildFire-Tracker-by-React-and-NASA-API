const LocationInfoBox = ({ info, setLocationInfo }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>
          NASA ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
      <button onClick={() => setLocationInfo(null)}>Close</button>
    </div>
  );
};

export default LocationInfoBox;
