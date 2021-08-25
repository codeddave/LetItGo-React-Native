import { useEffect } from "react/cjs/react.production.min";
import { useState } from "react/cjs/react.production.min";
import * as Location from "expo-location";

export function useLocation() {
  const [location, setLocation] = useState();

  const getUserLocation = async () => {
    try {
      const result = await Location.requestBackgroundPermissionsAsync();
      if (!result.granted) return;
      const {
        coords: { longitude, latitude },
      } = Location.getLastKnownPositionAsync();
      setLocation({
        longitude,
        latitude,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserLocation();
  }, []);

  return location;
}
