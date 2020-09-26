import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon, Segment } from "semantic-ui-react";

const EventDetailedMap = ({ latLng }) => {
  const Marker = () => {
    return <Icon name="marker" size="big" color="red" />;
  };

  const zoom = 14;

  return (
    <Segment attached="bottom" style={{ padding: 0 }}>
      <div style={{ height: 300, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAkKs-YnXNx_kdLiVIPLr7ppGDopDADZKg" }}
          center={latLng}
          zoom={zoom}
        >
          <Marker lat={latLng.lat} lng={latLng.lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;
