import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
  const { state: { errorMessage }, signUp } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Spacer>
          <Text style={styles.link}>Already have an account? Sign in instead.</Text>
        </Spacer>
      </TouchableOpacity>
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
    marginBottom: 250,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  link: {
    color: 'blue',
  },
});

export default SignUpScreen;
