import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

const Suhu = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');
  const [reamur, setReamur] = useState('');

  const convertTemperature = () => {
    const celsiusValue = parseFloat(celsius);

    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      const kelvinValue = celsiusValue + 273.15;
      const reamurValue = celsiusValue * 4/5;

      setFahrenheit(fahrenheitValue.toFixed(2).toString());
      setKelvin(kelvinValue.toFixed(2).toString());
      setReamur(reamurValue.toFixed(2).toString());
    } else {
      setFahrenheit('');
      setKelvin('');
      setReamur('');
    }
  };

  const reset = () => {
    setCelsius('');
    setFahrenheit('');
    setKelvin('');
    setReamur('');
  };

  return (
    <LinearGradient
    colors={['#224160', '#0F1A2F']} // Adjust the colors as needed
    style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Temperature Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Celsius"
        placeholderTextColor={'grey'}
        value={celsius}
        onChangeText={(text) => setCelsius(text)}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={convertTemperature}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultField}>
        Fahrenheit: {fahrenheit} °F
      </Text>
      <Text style={styles.resultField}>
        Kelvin: {kelvin} K
      </Text>
      <Text style={styles.resultField}>
        Réaumur: {reamur} °Re
      </Text>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    color: 'black',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#16a0ff',
    width: 120,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultField: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Suhu;
