import React, { useContext, useState, useEffect } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { SourceContext } from "@/Context/SourceContext";
import { DestinationContext } from "@/Context/DestinationContext";

const containerStyle = {
  width: "100%",
  height: window.innerWidth * 0.45,
};

function Googlemap() {
  /*const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
  });*/

  const { Source, setSource } = useContext(SourceContext);
  const { Destination, setDestination } = useContext(DestinationContext);

  //hardcoded form.......
  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [map, setMap] = React.useState(null);

  //to make lattitude and longitude dynamic using setCenter
  useEffect(() => {
    if (Source?.length != [] && map) {
      //for smooth transition from one location to another.....
      map.panTo({
        lat: Source.lat,
        lng: Source.lng,
      });

      setCenter({
        lat: Source.lat,
        lng: Source.lng,
      });
    }
  }, [Source]);

  useEffect(() => {
    if (Destination?.length != [] && map) {
      map.panTo({
        lat: Source.lat,
        lng: Source.lng,
      });
      setCenter({
        lat: Destination.lat,
        lng: Destination.lng,
      });
    }
  }, [Destination]);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "1d06547a2b8732e3" }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>

      {Source?.length != [] ? (
        <MarkerF
          position={{ lat: Source.lat, lng: Source.lng }}
          icon={{
            url: "/pickup.png",
            scaledSize: {
              width: 20,
              height: 20,
            },
          }}
        />
      ) : null}

      {Destination?.length != [] ? (
        <MarkerF
          position={{ lat: Destination.lat, lng: Destination.lng }}
          icon={{
            url: "/destination.png",
            scaledSize: {
              width: 20,
              height: 20,
            },
          }}
        />
      ) : null}
    </GoogleMap>
  );
}

export default Googlemap;
