import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const { state: { locations, name }, reset } = useContext(LocationContext);

  const saveTrack = async () => {
    try {
      await createTrack(name, locations);
      reset();
      navigate('TrackList');
    } catch (error) {
      console.log(error);
    }
  };

  return [saveTrack];
}
