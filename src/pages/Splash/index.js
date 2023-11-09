import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(5); // Waktu dalam detik

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown);
        navigation.navigate('Login'); // Navigasi ke layar Login setelah waktu habis
      }
    }, 500);

    return () => {
      clearInterval(countdown);
    };
  }, [timer, navigation]);

  return (
    <LinearGradient
      colors={['rgba(18, 19, 21, 0.90)', 'rgba(18, 19, 21, 0.90)', 'rgba(18, 19, 21, 1.20)', 'rgba(18, 19, 21, 1.1)', 'rgba(18, 19, 21, 1.2)']}
      style={styles.container}
    >
      <Image source={require("../../../assets/splash.png")} style={styles.stepImage} resizeMode="contain" />
      <Text style={styles.title}>Eureka Games</Text>
      <Text style={styles.description}>
        Your Ultimate Game Store
      </Text>
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
    marginVertical: 50,
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  description: {
    textAlign: "center",
    color: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  timer: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Splash;
