import React, { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import { Input, Button } from 'react-native-elements';
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

  let recordingButton = <Button title="Start Recording" onPress={startRecording} />;
  if (recording === true) {
    recordingButton = <Button title="Stop Recording" onPress={stopRecording} />;
  }

  let saveTrackButton;
  if (recording === false && locations.length !== 0) {
    saveTrackButton = <Button title="Save Recording" onPress={saveTrack} />
  }

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter Track Name..." />
      </Spacer>
      <Spacer>
        {recordingButton}
      </Spacer>
      <Spacer>
        {saveTrackButton}
      </Spacer>
    </>
  );
};

export default TrackForm;
