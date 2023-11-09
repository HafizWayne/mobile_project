import { useNavigation } from '@react-navigation/native';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegisterPress = ({}) => {
    navigation.navigate('Register');
  
  }

  
  const handleLoginPress = () => {
    // Check the username and password (you may want to replace this with actual authentication logic)
    if (username === 'hafiz' && password === '1234') {
      navigation.navigate('Menu', { username}); // Redirect to the menu page
    } else {
      // Handle incorrect credentials (e.g., show an error message)
      alert('Invalid username or password');
    }
  }

  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.90)', 'rgba(255, 255, 255, 0.90)', 'rgba(255, 255, 255, 1.20)', 'rgba(255, 255, 255, 1.1)', 'rgba(255, 255, 255, 1.2)']}
      style={styles.container}
    >
      <Image source={require("../../../assets/login.png")} style={styles.stepImage} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor={'gray'}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={'gray'}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>Belum memiliki akun?</Text>
      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={styles.signupLink}>Daftar disini</Text>
      </TouchableOpacity>
    </LinearGradient>
  );



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepImage: {
    width: '80%',
    height: 300,
    marginVertical: 20,
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: '#000',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 50, height: 2 },
    shadowRadius: 400,
  },
  inputLabel: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    color: 'gray',
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#16a0ff',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupText: {
    marginTop: 20,
    color: 'black',
    fontSize: 16,
  },
  signupLink: {
    color: '#16a0ff', // Mengubah warna menjadi abu
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;