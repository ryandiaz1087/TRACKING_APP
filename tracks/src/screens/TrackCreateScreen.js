import React, { useContext, useCallback } from 'react';
import useLocation from '../hooks/useLocation';
import { Context as LocationContext } from '../context/LocationContext';
import isNil from 'lodash/isNil';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext);

  const useLocationCallback = useCallback((location) => addLocation(location, recording), [recording]);

  const shouldTrackLocation = isFocused || recording;
  const [error] = useLocation(shouldTrackLocation, useLocationCallback);

  let errorAlert;
  if (!isNil(error)) {
    errorAlert = <Text>Please enable location services.</Text>;
  } else {
    errorAlert = null
  }

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.title}>Create A Track</Text>
      <Map />
      {errorAlert}
      <TrackForm />
    </SafeAreaView>
  );
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />,
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#2d3436',
    fontSize: 50,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default withNavigationFocus(TrackCreateScreen);
 