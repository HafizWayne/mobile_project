import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LineChart } from 'react-native-chart-kit'; // Import LineChart

const Calculator = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [uts, setUts] = useState('');
  const [uas, setUas] = useState('');
  const [tugas1, setTugas1] = useState('');
  const [tugas2, setTugas2] = useState('');

  const addStudent = () => {
    // Menghitung nilai akhir dan indeks nilai untuk mahasiswa yang baru ditambahkan
    const newStudent = {
      name,
      uts: parseFloat(uts),
      uas: parseFloat(uas),
      tugas1: parseFloat(tugas1),
      tugas2: parseFloat(tugas2),
    };
  
    // Menambahkan mahasiswa dengan nilai akhir dan indeks nilai ke dalam array students
    const studentWithIndex = calculateIndex(newStudent);
    setStudents([...students, studentWithIndex]);
  
    // Reset form fields
    setName('');
    setUts('');
    setUas('');
    setTugas1('');
    setTugas2('');
  };

  const calculateIndex = (student) => {
    const nilaiAkhir = (student.uts + student.uas + student.tugas1 + student.tugas2) / 4;
    let indeksNilai = '';
    if (nilaiAkhir >= 80) {
      indeksNilai = 'A';
    } else if (nilaiAkhir >= 70) {
      indeksNilai = 'B';
    } else if (nilaiAkhir >= 60) {
      indeksNilai = 'C';
    } else if (nilaiAkhir >= 50) {
      indeksNilai = 'D';
    } else {
      indeksNilai = 'E';
    }

    return { ...student, nilaiAkhir, indeksNilai };
  };

  const reset = () => {
    setStudents([]);
    setName('');
    setUts('');
    setUas('');
    setTugas1('');
    setTugas2('');
  };

  const chartData = {
    labels: students.map((student) => student.name),
    datasets: [
      {
        data: students.map((student) => student.nilaiAkhir),
      },
    ],
  };

  return (
    <LinearGradient colors={['#224160', '#0F1A2F']} style={styles.container}>
    <ScrollView >
  
        <Text style={styles.title}>Student Grade Calculator</Text>
        <TextInput
          style={{...styles.input, marginBottom: 15}}
          placeholder="Student Name"
          placeholderTextColor="gray"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={{...styles.input, marginBottom: 15}}
          placeholder="UTS"
          placeholderTextColor="gray"
          value={uts}
          onChangeText={(text) => setUts(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={{...styles.input, marginBottom: 15}}
          placeholder="UAS"
          placeholderTextColor="gray"
          value={uas}
          onChangeText={(text) => setUas(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={{...styles.input, marginBottom: 15}}
          placeholder="Tugas 1"
          placeholderTextColor="gray"
          value={tugas1}
          onChangeText={(text) => setTugas1(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={{...styles.input, marginBottom: 30}}
          placeholder="Tugas 2"
          placeholderTextColor="gray"
          value={tugas2}
          onChangeText={(text) => setTugas2(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={addStudent}>
          <Text style={styles.buttonText}>Add Student</Text>
        </TouchableOpacity>
        <Text style={{...styles.sectionTitle}}>Student List:</Text>
        {students.map((student, index) => (
          <View style={styles.studentItem} key={index}>
            <Text style={styles.studentName}>{student.name}</Text>
            <Text style={styles.studentInfo}>Nilai Akhir: {student.nilaiAkhir}</Text>
            <Text style={styles.studentInfo}>Indeks Nilai: {student.indeksNilai}</Text>
          </View>
        ))}
        {students.length > 0 && (
          <View style={styles.chartContainer}>
            <Text style={styles.sectionTitle}>Student Grade Chart:</Text>
            <LineChart style={{borderRadius: 20, }}
        data={chartData}
        width={300}
        height={200}
        chartConfig={{
          backgroundGradientFrom: 'white', // Warna latar belakang abu-abu
          backgroundGradientTo: 'white', // Warna latar belakang abu-abu
          color: (opacity = 1) => `rgba(0, 128, 500, ${opacity})`, // Warna garis biru tua
          labelColor: (opacity = 1) => `rgba(0, 128, 255, ${opacity})`, // Warna label putih
          labelFontSize: 1,
          strokeWidth: 3, // Lebar garis grafik 3
          borderRadius: 30,

              }}
            />
          </View>
        )}
        <TouchableOpacity style={styles.buttonreset} onPress={reset}>
          <Text style={styles.buttonresettext}>Reset</Text>
        </TouchableOpacity>
     
   
    </ScrollView>
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
    paddingVertical: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    color: 'black',
    paddingBottom: 10,
    paddingLeft: 20,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#16a0ff',
    width: 150,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  studentItem: {
    backgroundColor: 'white',
    borderRadius: 20,
    color: 'black',
    width: 200,
    padding: 20,
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 5,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  studentInfo: {
    fontSize: 16,
    color: 'black',
  },
  chartContainer: {
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  buttonreset: {
    backgroundColor: '#16a0ff',
    marginVertical: 15,
    width: 150,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonresettext: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});

export default Calculator;
