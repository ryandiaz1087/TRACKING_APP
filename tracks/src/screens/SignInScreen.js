import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignInScreen = () => {
  const { state: { errorMessage }, signIn, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        // Gets called as soon as you INITIATE the transition to another screen onWillFocus={() => {}}
        // Gets called as soon as you LAND on the other screen onDidFocus={() => {}}
        // Gets called anytime we're about to navigate away from the current screen
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign In to your Account"
        errorMessage={errorMessage}
        onSubmit={signIn}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Don't have an account? Sign Up instead."
        routeName="SignUp"
      />
    </View>
  );
}

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
    backgroundColor: 'black',
  },
});

export default SignInScreen;
