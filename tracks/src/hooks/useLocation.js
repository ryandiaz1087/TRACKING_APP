import isNil from 'lodash/isNil';
import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

const useLocation = (shouldTrackLocation, callback) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        const sub = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
          callback,
        );
        subscriber = sub;
      } catch (error) {
        setError(error);
      }
    }

    if (shouldTrackLocation === true) {
      startWatching();
    } else {
      if (!isNil(subscriber)) {
        subscriber.remove();
        subscriber = null;
      }
    }

    return () => {
      if (!isNil(subscriber)) {
        subscriber.remove();
      }
    };
  }, [shouldTrackLocation, callback]);

  return [error];
}

export default useLocation;
