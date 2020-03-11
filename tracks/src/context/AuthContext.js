import { AsyncStorage } from 'react-native';
import isNil from 'lodash/isNil';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP':
    case 'SIGN_IN':
      return {
        ...state,
        token: action.payload,
        errorMessage: '',
      };
    case 'SIGN_OUT':
      return {
        ...state,
        token: null,
        errorMessage: '',
      }
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
      const { data: { token } } = await trackerApi.post('/auth/signup', { email, password});

      await AsyncStorage.setItem('token', token);
      dispatch({ type: 'SIGN_UP', payload: token });

      navigate('TrackList');
    } catch (error) {
      dispatch({
        type: 'ADD_ERROR',
        payload: 'Something went wrong with sign up.',
      })
    }
  };

const signIn = (dispatch) => async ({ email, password }) => {
  try {
    const { data: { token }} = await trackerApi.post('/auth/signin', { email, password});

    await AsyncStorage.setItem('token', token);
    dispatch({ type: 'SIGN_IN', payload: token });

    navigate('TrackList');
  } catch (error) {
    dispatch({
      type: 'ADD_ERROR',
      payload: 'Something went wrong with sign in.',
    })
  }
  };


export const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'SIGN_OUT' });
  navigate('loginFlow');
};

export const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (!isNil(token)) {
    dispatch({ type: 'SIGN', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'ADD_ERROR', payload: '' });
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signUp,
    signIn,
    signOut,
    tryLocalSignIn,
    clearErrorMessage,
  },
  {
    token: null,
    errorMessage: '',
  },
);