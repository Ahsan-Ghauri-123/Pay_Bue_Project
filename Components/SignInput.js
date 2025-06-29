import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

const SignInput = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState("");
    const ToogleVisibible = () => {
        setShow(!show);
    };
    return (
        <View>
            <Text style={{ marginHorizontal: 22, fontSize: 17, fontWeight: "400", color: "#050609", marginTop: "7%" }}>Name</Text>
            <TextInput value={email} onChangeText={(text) => {
                setEmail(text);
            }}
                placeholder='First and Last Name' style={{ height: 60, paddingHorizontal: 22, paddingVertical: 10, borderWidth: 1, width: "88%", alignSelf: "center", borderRadius: 10, borderColor: "#E8E7EA" }} />
            <Text style={{ marginHorizontal: 22, fontSize: 17, fontWeight: "400", color: "#050609", marginTop: "2%" }}>E-mail </Text>
            <TextInput value={email} onChangeText={(text) => {
                setEmail(text);
            }}
                placeholder='Enter your email' style={{ height: 60, paddingHorizontal: 22, paddingVertical: 10, borderWidth: 1, width: "88%", alignSelf: "center", borderRadius: 10, borderColor: "#E8E7EA" }} />
            <Text style={{ marginHorizontal: 22, fontSize: 17, fontWeight: "400", color: "#050609", marginTop: "2%" }}>Password </Text>
            <View style={{ width: "88%", alignSelf: "center" }}>
                <TextInput
                    value={password} secureTextEntry={!show} onChangeText={(text) => {
                        setPassword(text);
                    }}
                    placeholder='Enter your Password'
                    style={{
                        height: 60,
                        paddingHorizontal: 22,
                        paddingVertical: 10,
                        borderWidth: 1,
                        width: "100%",
                        borderRadius: 10,
                        borderColor: "#E8E7EA",
                        paddingRight: 50
                    }}
                />
                <TouchableOpacity
                    onPress={ToogleVisibible}
                    style={{
                        position: "absolute",
                        right: 15,
                        top: 1,
                        height: "100%",
                        justifyContent: "center"
                    }}>
                    <Icon name={show ? "eye" : "eye-off"} size={22} color="#96979F" />
                </TouchableOpacity>
            </View>
            <Text style={{ marginHorizontal: 22, fontSize: 17, fontWeight: "400", color: "#050609", marginTop: "2%" }}>Repeat the Password</Text>
            <View style={{ width: "88%", alignSelf: "center" }}>
                <TextInput
                    value={password} secureTextEntry={!show} onChangeText={(text) => {
                        setPassword(text);
                    }}
                    placeholder='Enter your Password'
                    style={{
                        height: 60,
                        paddingHorizontal: 22,
                        paddingVertical: 10,
                        borderWidth: 1,
                        width: "100%",
                        borderRadius: 10,
                        borderColor: "#E8E7EA",
                        paddingRight: 50
                    }}
                />
                <TouchableOpacity
                    onPress={ToogleVisibible}
                    style={{
                        position: "absolute",
                        right: 15,
                        top: 1,
                        height: "100%",
                        justifyContent: "center"
                    }}>
                    <Icon name={show ? "eye" : "eye-off"} size={22} color="#96979F" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignInput;
