import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SignBtn = (props) => {
    return (
        <View>
            <TouchableOpacity style={{ padding: "5%", backgroundColor: "white", borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: "2%", marginHorizontal: 10, borderWidth: 1, borderColor: "#FB724C" }}
                onPress={props.onPress}>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#FB724C" }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignBtn;