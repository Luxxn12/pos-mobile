import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

interface EmailInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({value, onChangeText, ...props}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={value}
      onChangeText={onChangeText}
      keyboardType="email-address"
      autoCapitalize="none"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
});

export default EmailInput;
