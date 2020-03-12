import React, { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { EvilIcons } from '@expo/vector-icons';

const TrackListScreen = ({ navigation }) => {
  const { state: tracks, fetchTracks } = useContext(TrackContext);

  const chevronIcon = (
    <EvilIcons name="chevron-right" size={30} style={{ color: 'white' }} />
  );

  const trackList = tracks.map((track) => (
    <TouchableOpacity
      key={track._id}
      onPress={
        () => navigation.navigate('TrackDetail', { _id: track._id })
      }
    >
      <ListItem
        title={track.name}
        titleStyle={styles.listTitle}
        containerStyle={styles.listItem}
        chevron={chevronIcon}
      />
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchTracks} />
      {trackList}
    </View>
  );
}

TrackListScreen.navigationOptions = {
  title: 'Tracks',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    backgroundColor: '#2d3436',
  },
  listTitle: {
    color: 'white',
    fontWeight: '100',
    fontSize: 20,
  },
  listItem: {
    backgroundColor: '#2d3436',
    borderBottomColor: 'white',
    borderBottomWidth: .5,
    borderStyle: 'solid',
  },
});

export default TrackListScreen;
