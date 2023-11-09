import { useNavigation } from '@react-navigation/native';
import React, { useState }  from 'react';
import { StyleSheet, Modal, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons


import LinearGradient from 'react-native-linear-gradient';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isRegistered, setIsRegistered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleRegisterPress = ({}) => {
    setIsRegistered(true);
    setModalVisible(true);
  }

  setTimeout(() => {
    setModalVisible(false);
  }, 3000); // Ubah angka sesuai dengan berapa detik yang Anda inginkan

  const closeModal = () => {
    setModalVisible(false);
  
  
  }

  
  const handleLoginPress = () => {
      navigation.navigate('Login'); // Redirect to the menu page
  }

  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.90)', 'rgba(255, 255, 255, 0.90)', 'rgba(255, 255, 255, 1.20)', 'rgba(255, 255, 255, 1.1)', 'rgba(255, 255, 255, 1.2)']}
      style={styles.container}
    >

<Image source={require("../../../assets/register.png")} style={styles.stepImage} resizeMode="contain" />

      <Text style={styles.title}>Register</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
        <View style={styles.inputWithIcon}>
        <Icon name="person" size={20} color="black" style={styles.inputIcon} />
        <TextInput style={{paddingLeft:8, color: 'black'}}
            placeholder="Username"
            placeholderTextColor={'gray'}
          />
          </View>
        </View>
        <View style={styles.inputWrapper}>
        <View style={styles.inputWithIcon}>
        <Icon name="mail" size={20} color="black" style={styles.inputIcon} />
        <TextInput style={{paddingLeft:8, color: 'black'}}
            placeholder="Email"
            placeholderTextColor={'gray'}
            
          />

        </View>
        </View>
        <View style={styles.inputWrapper}>
        <View style={styles.inputWithIcon}>
        <Icon name="lock-closed" size={20} color="black" style={styles.inputIcon} /> 
        <TextInput style={{paddingLeft:8, color: 'black'}}
            placeholder="Password"
            placeholderTextColor={'gray'}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          </View>
        </View>

        <View style={styles.inputWrapper}>
        <View style={styles.inputWithIcon}>
        <Icon name="lock-closed" size={20} color="black" style={styles.inputIcon} /> 
        <TextInput style={{paddingLeft:8, color: 'black'}}
            placeholder="Confirm Password"
            placeholderTextColor={'gray'}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.successMessage}>Akun telah berhasil disimpan</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <Text style={styles.signupText}>Sudah memiliki akun?</Text>
      <TouchableOpacity onPress={handleLoginPress}>
        <Text style={styles.signupLink}>Login disini</Text>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  stepImage: {
    width: '80%',
    height: 250,
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
  flexDirection: 'row',
  alignItems: 'center',
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
    color: 'gray',
    paddingVertical: 10,
  },
  inputWithIcon: {
    flexDirection: 'row',
    color:'black',
    alignItems: 'center',
    borderBottomColor: 'black', // Color of the line under the icon and input
    width: 310,
    borderBottomWidth: 1, // Thickness of the line
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
  closeButton: {
    color: 'blue',
    fontSize: 18,
    marginTop: 20,
  },

  successMessage: {
    color: 'green', // Ganti warna pesan sesuai keinginan Anda
    fontSize: 20,
    marginTop: 10, // Sesuaikan jarak dari tombol Register
  },
});

export default Register;