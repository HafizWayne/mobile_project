import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import ImageZoom from 'react-native-image-pan-zoom';
import { useNavigation, useRoute } from '@react-navigation/native';

const Profile = () => {
    const route = useRoute();

    const { username } = route.params || {}; // Set username to an empty object by default
    

    

  const [isModalVisible, setModalVisible] = useState(false);
  const userProfileName = username || "Default Name"; // Set a default name if username is not provided
  const userProfileImage = require('../../../assets/foto.jpg'); // Replace with the actual image

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <LinearGradient
      colors={['#224160', '#0F1A2F']} // Adjust the colors as needed
      style={styles.container}
    >
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.profileImageContainer}>
            <Image source={userProfileImage} style={styles.profileImage} />
          </View>
        </TouchableOpacity>
        <Text style={styles.profileName}>{userProfileName}</Text>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <ImageZoom
            cropWidth={300}
            cropHeight={400}
            imageWidth={300} // Set to your desired full-width value
            imageHeight={400} // Set to your desired full-height value
          >
            <Image source={userProfileImage} style={styles.enlargedProfileImage} />
          </ImageZoom>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enlargedProfileImage: {
    width: 300, // Set to your desired full-width value
    height: 400, // Set to your desired full-height value
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Profile;
