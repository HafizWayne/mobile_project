import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const data = [
    { id: '1', text: 'Cities Skyline 2', image: require("../../../assets/imagegame/citiesskyline2.jpeg"), text2: 'Rp.500.000' },
    { id: '2', text: 'Card 2', image: require("../../../assets/imagegame/citiesskyline2.jpeg") },
    { id: '3', text: 'Card 3', image: require("../../../assets/imagegame/citiesskyline2.jpeg") },
    { id: '4', text: 'Card 4', image: require("../../../assets/imagegame/citiesskyline2.jpeg") },
    { id: '5', text: 'Card 5', image: require("../../../assets/imagegame/citiesskyline2.jpeg") },
  ];
  const data2 = [
    { id: '1', text: 'Cities Skyline 2', image: require("../../../assets/imagegame/citiesskyline2.jpeg") },
    { id: '2', text: 'Card 2', image: require("../../../assets/imagegame/citiesskyline2.jpeg") },
    { id: '3', text: 'Card 3', image: require("../../../assets/imagegame/citiesskyline2.jpeg") },
    { id: '4', text: 'Card 4', image: require("../../../assets/imagegame/citiesskyline2.jpeg") },
    { id: '5', text: 'Card 5', image: require("../../../assets/imagegame/citiesskyline2.jpeg") },
  ];

  const navigation = useNavigation();
  const route = useRoute();

  const handleProfilePress = () => {
    navigation.navigate('Profile', { username });
  }

  const handleAboutDeveloper = () => {
    navigation.navigate('AboutUs');
  }

  const handleLogoutPress = () => {
    navigation.navigate('Login');
  }

  const [showDropdown, setShowDropdown] = useState(false);

  const { username } = route.params || {};
  const userProfileName = username || "Default Name";
  const userProfileWallet = "Rp.1.000.000";

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.text}</Text>
      <Text style={styles.cardText2}>{item.text2}</Text>
    </View>
  );

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <LinearGradient
      colors={['#224160', '#0F1A2F']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Welcome To Eureka Games</Text>
        <View style={styles.profileSection}>
          <View style={styles.profileContent}>
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>{userProfileName}</Text>
              <Text style={styles.profileWallet}>{userProfileWallet}</Text>
            </View>
            <TouchableOpacity onPress={toggleDropdown}>
              <Image
                source={require("../../../assets/foto.jpg")}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {showDropdown && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={handleProfilePress}>
              <Text style={styles.dropdownItem}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAboutDeveloper}>
              <Text style={styles.dropdownItem}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogoutPress}>
              <Text style={styles.dropdownItem}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.title}>New Games</Text>
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.title}>Top Games</Text>
        <FlatList
          data={data2}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 30,
    color: 'white',
    paddingVertical: 20,
    paddingBottom: 15,
  },
  profileSection: {
    padding: 20,
    width: 350,
    alignSelf: 'center',
    backgroundColor: '#202126',
    margin: 10,
    borderRadius: 10,
    paddingBottom: 20,
  },
  profileContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  dropdown: {
    backgroundColor: '#202126',
    borderRadius: 10,
    elevation: 5,
    width: 350, // Sesuaikan ukuran dropdown dengan card profil
    bottom: 0,
    left: 20,
    alignItems: 'center',
    position: 'relative',
    zIndex: 2, // Ensure the dropdown is above other elements
  },
  dropdownItem: {
    padding: 15, // Sesuaikan jarak padding dengan card profil
    color: 'white', // Ubah warna teks menjadi putih
    textAlign: 'center', // Tengahkan teks
  },
  cardImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card: {
    width: 330,
    height: 400,
    backgroundColor: '#202126',
    padding: 20,
    margin: 10,
    marginLeft: 20,
    borderRadius: 30,
    marginBottom: 30,
    elevation: 3,
  },
  profileName: {
    color: 'white',
    paddingBottom: 5,
  },
  profileWallet: {
    color: 'white',
  },
  cardText: {
    paddingTop: 10,
    fontSize: 20,
    color: 'white',
  },
  cardText2: {
    paddingTop: 5,
    color: 'white',
    paddingLeft: 200,
    fontSize: 15,
  },
});

export default Home;
