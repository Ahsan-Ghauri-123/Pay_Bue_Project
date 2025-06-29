import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LoginBtn = (props) => {
    return (
        <View>
            <TouchableOpacity style={{ padding: "5%", backgroundColor: props.backgroundColor, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: "8%", marginHorizontal: 10, borderColor:props.borderColor }}
                onPress={props.onPress}>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: props.color }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginBtn;