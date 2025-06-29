import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Feather";
import MyInput from '../../Components/MyInput';
import LoginBtn from '../../Components/LoginBtn';

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");
  const ToogleVisibible = () => {
    setShow(!show);
  };
  return (
    <SafeAreaView style={{
      flex: 1,
      width: '100%',
      backgroundColor: "#00386D"
    }}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ width: "100%", height:"100%", backgroundColor: "white", borderTopRightRadius: 22, borderTopLeftRadius: 22, padding: "3%", marginTop: "20%" }}>
      <TouchableOpacity onPress={()=>{
        props.navigation.goBack();
      }}>
      <Icons name="arrowleft" size={22} color="gray" style={{ margin: 18 }} />
      </TouchableOpacity>  
        <Text style={{ marginHorizontal: 22, fontSize: 19, fontWeight: "bold" }}>Let’s  start here</Text>
        <Text style={{ marginHorizontal: 22, fontSize: 14, fontWeight: "bold", color: "gray" }}>Fill in your details to begin</Text>
        <MyInput />
        <Text style={{ marginHorizontal: 22, fontSize: 14, fontWeight: "bold", color: "#FB724C", alignSelf: "flex-end", marginTop: "2%" }}>Forget Password?</Text>
        <LoginBtn backgroundColor="#00386D" color="white" onPress={()=>{
          props.navigation.navigate("LoginScreen");
      }} text="Sign In" />
        <View style={{ width: "100%", marginVertical: 20, flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontSize: 14, color: "gray" }}>------------------------ OR ------------------------</Text>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center", width: "50%", justifyContent: "space-around", marginTop: "4%" }}>
          <View style={{ borderRadius: 20, borderWidth: 0.2, height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require('../../assets/Images/Apple.png')}
            />
          </View>
          <View style={{ borderRadius: 20, borderWidth: 0.2, height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require('../../assets/Images/Google.png')}
            />
          </View>
        </View>
        <View style={{ width: "50%", justifyContent: "center", alignSelf: "center", flexDirection: "row", marginTop: "7%" }}>
          <Text style={{ fontSize: 13, color: "#96979F" }}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUpScreen')}>
            <Text style={{ fontSize: 14, color: "#FB724C", fontWeight: "400" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;