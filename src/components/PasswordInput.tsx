import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

interface PasswordInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  ...props
}) => {
  const [isSecure, setIsSecure] = useState(true);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        {...props}
      />
      <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeIcon}>
        <Icon
          name={isSecure ? 'eye-off-outline' : 'eye-outline'}
          size={20}
          color="#555"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
});

export default PasswordInput;
