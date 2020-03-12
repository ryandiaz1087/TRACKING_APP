import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import mapStyle from '../json/mapStyle.json';

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <Text style={styles.header}>Sign Out</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.map}
        region={{
          latitude: 34.039005,
          longitude: -118.218384,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      />
      <Spacer>
        <Button
          title="Sign Out"
          type="outline"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          onPress={signOut}
        />
      </Spacer>
    </SafeAreaView>
  );
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3436',
  },
  header: {
    fontSize: 50,
    paddingVertical: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: '100',
  },
  map: {
    height: 300,
  },
  button: {
    borderColor: 'white',
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '100',
  },
});

export default AccountScreen;
