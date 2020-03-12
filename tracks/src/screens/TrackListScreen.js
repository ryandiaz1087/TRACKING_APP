import React, { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { EvilIcons } from '@expo/vector-icons';

const TrackListScreen = ({ navigation }) => {
  const { state: tracks, fetchTracks } = useContext(TrackContext);

  const chevronIcon = (
    <EvilIcons name="chevron-right" size={30} style={{ color: 'white' }} />
  );

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        keyExtractor={item => item._id}
        data={tracks}
        renderItem={
          ({ item }) => {
            return (
              <TouchableOpacity
                onPress={
                  () => navigation.navigate('TrackDetail', { _id: item._id })
                }
              >
                <ListItem
                  title={item.name}
                  titleStyle={styles.listTitle}
                  containerStyle={styles.listItem}
                  chevron={chevronIcon}
                />
              </TouchableOpacity>
            );
          }
        }
      />
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
