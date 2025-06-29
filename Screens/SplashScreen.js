import React,{useEffect} from "react";
import { View, Text } from "react-native";

const SplashScreen=(props)=>{
    useEffect(() => {
        const timer = setTimeout(() => {
          props.navigation.navigate("Register");
        }, 3000);
      
        return () => clearTimeout(timer); 
      }, []);
  return(
    <View style={{flex:1, backgroundColor:"#9ED0FF", justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:28, fontWeight:"400", color:"#00386D"}}>payBue</Text>
    </View>
  );
};

export default SplashScreen;