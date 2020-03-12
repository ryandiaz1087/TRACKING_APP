import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = () => {
  const { state: { errorMessage }, signUp, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        // Gets called as soon as you INITIATE the transition to another screen onWillFocus={() => {}}
        // Gets called as soon as you LAND on the other screen onDidFocus={() => {}}
        // Gets called anytime we're about to navigate away from the current screen
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign Up"
        errorMessage={errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signUp}
      />
      <NavLink
        routeName="SignIn"
        text="Already have an account? Sign in instead."
      />
    </View>
  );
}

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 250,
    backgroundColor: '#2d3436',
  },
});

export default SignUpScreen;
