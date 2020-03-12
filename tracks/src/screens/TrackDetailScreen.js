import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from '../json/mapStyle.json';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);

  const _id = navigation.getParam('_id');

  const track = state.find(track => track._id === _id);
  const initialCoordinates = track.locations[0].coords;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{track.name}</Text>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoordinates,
        }}
      >
        <Polyline
          coordinates={track.locations.map(({ coords }) => coords)}
          strokeColor="#FFFFFF"
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3436',
  },
  title: {
    fontSize: 50,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
    paddingVertical: 10,
  },
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
