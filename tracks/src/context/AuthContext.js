import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        token: action.payload,
        errorMessage: '',
      };
    case 'ADD_ERROR':
      return {
        ...state,
        errorMessage: action.payload,
      };
    default: 
      return state;
  }
};

const signUp = (dispatch) => async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/auth/signup', { email, password});

      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'SIGN_UP', payload: response.data.token });

      navigate('TrackList');
    } catch (error) {
      dispatch({
        type: 'ADD_ERROR',
        payload: 'Something went wrong with sign up.',
      })
    }
  };

const signIn = (dispatch) => ({ email, password }) => {

  };


const signOut = (dispatch) => {
  return () => {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signUp,
    signIn,
    signOut,
  },
  {
    token: null,
    errorMessage: '',
  },
);