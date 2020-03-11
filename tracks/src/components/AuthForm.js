import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let errorAlert;
  if (errorMessage.length !== 0) {
    errorAlert = <Text style={styles.errorMessage}>{errorMessage}</Text>
    setTimeout(() => {
      errorAlert = null;
    }, 3000);
  }

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
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
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      {errorAlert}
      <Spacer>
        <Button title="Sign Up" onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default AuthForm;
