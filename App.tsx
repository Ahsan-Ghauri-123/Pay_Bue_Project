import React from "react";
import { View, Text } from "react-native";
import SplashScreen from "./Screens/SplashScreen";
import Navigation from "./Navigator/Navigation";
import { NavigationContainer } from "@react-navigation/native";

const App=()=>{
  return(
    <NavigationContainer>
          <Navigation />
    </NavigationContainer>
  );
};

export default App;