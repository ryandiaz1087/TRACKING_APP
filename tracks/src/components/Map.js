import React, { useContext } from 'react';
import isNil from 'lodash/isNil';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';
import mapStyle from '../json/mapStyle.json';

const Map = () => {
  const { state: { currentLocation, locations } } = useContext(LocationContext);

  const points = locations.map(location => location.coords);

  if (isNil(currentLocation)) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline coordinates={points} />
    </MapView>

  );
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
