import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const SplashScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    const asyncTryLocalSignIn = async () => {
      try {
        tryLocalSignIn();
      } catch (error) {
        console.log(error);
      }
    }

    asyncTryLocalSignIn();
  }, []);

  return <View />;
}

export default SplashScreen;
