import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const subtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const multiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const divide = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  const reset = () => {
    setNum1('');
    setNum2('');
    setResult(0);
  };

  return (
    <LinearGradient
    colors={['#224160', '#0F1A2F']} // Adjust the colors as needed
    style={styles.container}
    >
    <View style={styles.container}>
    <Image source={require("../../../assets/gambarkalku.png")} style={styles.stepImage} resizeMode="cover" />
      <Text style={styles.title}>Simple Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        placeholderTextColor={'grey'}
        value={num1}
        onChangeText={(text) => setNum1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        placeholderTextColor={'grey'}
        value={num2}
        onChangeText={(text) => setNum2(text)}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={add}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={subtract}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={multiply}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={divide}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

 
        

        </View>
        <TouchableOpacity style={styles.buttonreset} onPress={reset}>
          <Text style={styles.buttonresettext}>Reset</Text>
         
        </TouchableOpacity>
      <TextInput
        style={styles.resultField}
        value={result.toString()}
        editable={false}
      />
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  },
    stepImage: {
      width: 150,
      height: 130,
      marginVertical: 50,
      justifyContent: 'center',
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    color: 'white',
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
    width: 60,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonresettext: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  buttonreset: {
    backgroundColor: '#16a0ff',
    marginVertical: 15,
    width: 150,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',

  },
  resultField: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    color: 'black',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Calculator;
