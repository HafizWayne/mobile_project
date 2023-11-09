import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male'); // Default to male
  const [bmi, setBmi] = useState(0);
  const [bmiStatus, setBmiStatus] = useState('');

  const calculateBmi = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!isNaN(weightValue) && !isNaN(heightValue)) {
      let result = 0;

      if (gender === 'male') {
        result = (weightValue / ((heightValue / 100) ** 2)).toFixed(2);
        
        if (result < 20) {
          setBmiStatus('Underweight');
        } else if (result >= 20 && result < 24) {
          setBmiStatus('Normal Weight');
        } else if (result >= 24 && result < 29) {
          setBmiStatus('Overweight');
        } else {
          setBmiStatus('Obese');
        }
      } else if (gender === 'female') {
        result = (weightValue / ((heightValue / 100) ** 2)).toFixed(2);

        if (result < 19) {
          setBmiStatus('Underweight');
        } else if (result >= 19 && result < 23) {
          setBmiStatus('Normal Weight');
        } else if (result >= 23 && result < 28) {
          setBmiStatus('Overweight');
        } else {
          setBmiStatus('Obese');
        }
      }

      setBmi(result);
    } else {
      setBmi(0);
      setBmiStatus('');
    }
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setBmi(0);
    setBmiStatus('');
  };

  return (
    
    <LinearGradient colors={['#224160', '#0F1A2F']} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Weight (kg)"
        placeholderTextColor={'gray'}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Height (cm)"
        placeholderTextColor={'gray'}
        value={height}
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
      />
      <View style={styles.genderContainer}>
        <Text style={styles.genderText}>Gender:</Text>
        <TouchableOpacity
          style={[styles.radioButton, gender === 'male' && styles.selectedGender]}
          onPress={() => setGender('male')}
        >
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, gender === 'female' && styles.selectedGender]}
          onPress={() => setGender('female')}
        >
          <Text style={styles.radioText}>Female</Text>
          
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calculateBmi}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
          
        </TouchableOpacity>
      </View>
      <Text style={styles.resultField}>
        BMI: {bmi}
      </Text>
      <Text style={styles.resultField}>
        BMI Status: {bmiStatus}
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
    color: 'white',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 15,
    alignSelf: 'flex-start',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    color: 'black',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  genderText: {
    marginRight: 10,
    color: 'white'
  },
  radioButton: {
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  selectedGender: {
    backgroundColor: '#16a0ff', // Change to your preferred color
  },
  radioText: {
    fontWeight: 'bold',
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    marginBottom: 20,
    marginVertical: 20
  },
  button: {
    backgroundColor: '#007BFF',
    width: 140,
    height: 50,
    borderRadius: 20,
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
    textAlign: 'center',
  },
});

export default BmiCalculator;
