import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Feather";
import SignInput from '../../Components/SignInput';
import LoginBtn from '../../Components/LoginBtn';
import SignBtn from '../../Components/SignBtn';

const SignUpScreen = (props) => {
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
        <ScrollView contentContainerStyle={{marginBottom:20}}>
        <View style={{ width: "100%", flex: 1, backgroundColor: "white", borderTopRightRadius: 22, borderTopLeftRadius: 22, padding: "3%", marginTop: "13%" }}>
        <TouchableOpacity onPress={() => {
            props.navigation.goBack();
        }}>
            <Icons name="arrowleft" size={22} color="gray" style={{ margin: 18 }} />
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 22, fontSize: 19, fontWeight: "bold" }}>Create account now</Text>
        <Text style={{ marginHorizontal: 22, fontSize: 14, fontWeight: "bold", color: "gray" }}>Fill in your details to begin</Text>
        <SignInput />
        <LoginBtn backgroundColor="#00386D" color="white" onPress={()=>{
            props.navigation.navigate("MyTabs");
        }} text="Create a new account" />
        <SignBtn  onPress={()=>{
            props.navigation.navigate("LoginScreen");
        }} />
        <View style={{ width: "50%", justifyContent: "center", alignSelf: "center", marginTop: "1%" }}>
            <Text style={{ fontSize: 9, color: "#96979F" }}>By creating account, I agree with <Text style={{ fontSize: 13, color: "#2B2B2B" }}>Terms of Use</Text> and <Text style={{ fontSize: 13, color: "#2B2B2B" }}>Privacy Policy</Text></Text>
        </View>
    </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;