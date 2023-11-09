import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AboutUs = () => {
  return (
    <LinearGradient
      colors={['#224160', '#0F1A2F']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>About Developer</Text>
        

        <View style={styles.developerInfo}>
          <Image
            source={require("../../../assets/foto.jpg")} // Ganti dengan gambar pengembang
            style={styles.developerImage}
          />
          <Text style={styles.title}>Hafiz Wayne</Text>
          <Text style={styles.developerText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est auctor, eleifend erat vel, hendrerit libero.
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  developerInfo: {
    backgroundColor: '#202126',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  developerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  developerText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AboutUs;
