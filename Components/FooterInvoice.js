import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView, TextInput } from 'react-native';
import { Switch, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";

const FooterInvoice = (props) => {
    const [email, setEmail] = useState('');
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '55%', '85%'], []);
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    const openBottomSheet = () => {
        setIsBottomSheetVisible(true);
        setTimeout(() => bottomSheetRef.current?.expand(), 100);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                height: 150,
                backgroundColor: "#00386D",
                width: "100%"
            }}>
                <View style={{
                    flexDirection: "row",
                    marginVertical: "6%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 15
                }}>
                    <TouchableOpacity
                        style={{
                            paddingVertical: 10,
                            backgroundColor: "#FFFFFF63",
                            borderRadius: 10,
                            paddingHorizontal: 40,
                            marginBottom: 5,
                            borderWidth: 0.5,
                            borderColor: "white"
                        }}
                        onPress={props.onPress}
                    >
                        <Text style={{
                            fontSize: 15,
                            color: "white",
                            fontWeight: "500"
                        }}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        paddingVertical: 10,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 10,
                        paddingHorizontal: 35,
                        marginBottom: 5
                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: "#00386D",
                            fontWeight: "500"
                        }}>Download</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default FooterInvoice;