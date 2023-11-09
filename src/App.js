import React from "react";
import { Button, View,  Text } from "react-native";
import { NavigationContainer , useNavigation} from '@react-navigation/native';
import { register } from "./pages";
import Router from "./router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function App  ()  {

  
    return (
  <NavigationContainer>
    <Router/>
  </NavigationContainer>

    );
  }


export default App;