import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import { Input, Button, withTheme } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = () => {
  const {
    state: {
      name,
      recording,
      locations,
    },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  let recordingButton = (
    <Button
      type="outline"
      title="Start Recording"
      onPress={startRecording}
      titleStyle={styles.buttonTitle}
      buttonStyle={styles.button}
    />
  );
  if (recording === true) {
    recordingButton = (
      <Button
        type="outline"
        title="Stop Recording"
        onPress={stopRecording}
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
      />
    );
  }

  let saveTrackButton;
  if (recording === false && locations.length !== 0) {
    saveTrackButton = (
      <Button
        type="outline"
        title="Save Recording"
        onPress={saveTrack}
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          inputStyle={styles.input}
          placeholder="Enter Track Name..."
          placeholderTextColor="white"
        />
      </Spacer>
      <Spacer>
        {recordingButton}
      </Spacer>
      <Spacer>
        {saveTrackButton}
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d3436',
    paddingBottom: 200,
  },
  input: {
    color: 'white',
    padding: 15,
  },
  button: {
    borderColor: 'white',
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '100',
  },
});

export default TrackForm;
