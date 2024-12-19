import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import CustomButton from '../../components/CustomButton';
import ColorPalette from '../../theme/ColorPalette';

function Login({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.replace('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN MYPOS</Text>
      <View style={styles.inputContainer}>
        <EmailInput value={email} onChangeText={setEmail} />
        <PasswordInput value={password} onChangeText={setPassword} />
        <CustomButton title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorPalette.background,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,

  },
  inputContainer:{
    width: '50%',
    justifyContent: 'center',
  }
});
export default Login;
