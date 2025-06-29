import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";

const HeaderInvoice = (props) => {
    return (
        <View>
            <View style={{
                height: 74,
                width: "100%",
                backgroundColor: "#00386D"
            }}>
                <View style={{
                    flexDirection: "row",
                    margin: 20,
                    gap: 10,
                    alignItems: "center",
                    marginTop: 24
                }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Icons name="arrowleft" size={22} color="white" />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 17,
                        color: "white",
                        flex: 1
                    }}>See your Invoice</Text>
                    <TouchableOpacity style={{
                        paddingVertical: 6,
                        paddingHorizontal: 8,
                        backgroundColor: "#A6D4FF66",
                        borderRadius: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                        borderWidth: 0.5,
                        borderColor: "white",
                        marginHorizontal: 15, marginBottom:10
                    }}>
                        <Icons name="delete" size={16} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default HeaderInvoice;
