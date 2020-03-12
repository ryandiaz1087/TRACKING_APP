import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { AntDesign } from '@expo/vector-icons';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mailIcon = (
    <AntDesign name="mail" size={20} style={{ color: 'white', margin: 0}} />
  );
  const lockIcon = (
    <AntDesign name="lock" size={20} style={{ color: 'white', padding: 0 }} />
  );

  let errorAlert;
  if (errorMessage.length !== 0) {
    errorAlert = <Text style={styles.errorMessage}>{errorMessage}</Text>
  }

  return (
    <>
      <Spacer>
        <Text style={styles.header}>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          leftIcon={mailIcon}
          labelStyle={styles.label}
          inputStyle={styles.input}
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          leftIcon={lockIcon}
          labelStyle={styles.label}
          inputStyle={styles.input}
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      {errorAlert}
      <Spacer>
        <Button
          type="outline"
          title={submitButtonText}
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: '100',
    textAlign: 'center',
  },
  label: {
    fontWeight: '100',
    color: 'white',
    fontSize: 20,
  },
  input: {
    color: 'white',
    padding: 15,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  button: {
    borderColor: 'white',
    color: 'white',
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '100',
  },
});

export default AuthForm;
