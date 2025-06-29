import React, { useState, useRef, useMemo } from 'react';
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput, KeyboardAvoidingView
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Switch, FlatList } from 'react-native';
import Icons from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/AntDesign";

const ShareInvoice = (props) => {
    const [email, setEmail] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const bottomSheetRef = useRef(null);
    const [isYearly, setIsYearly] = useState(false);
    const snapPoints = useMemo(() => ['65%'], []);

    const togglePlan = () => setIsYearly(prev => !prev);
    const openBottomSheet = () => bottomSheetRef.current?.expand();

    const price = isYearly ? '86.40' : '9';
    const period = isYearly ? 'Year' : 'Month';

    return (
        <GestureHandlerRootView style={styles.container}>
            <View>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Icon name="arrowleft" size={22} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>See your Invoice</Text>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Icon name="delete" size={16} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                <View style={styles.invoiceDetails}>
        <Text style={styles.invoiceLabel}>Invoice Details</Text>
        <View style={styles.invoiceBox}>
          <Text style={styles.invoiceFrom}>FROM</Text>
          <Text style={styles.invoiceText}>Company Name{"\n"}California, Los Angels{"\n"}6454 Iowa City, CA{"\n"}United States</Text>
          <Text style={styles.editProfile}>Edit Profile</Text>
        </View>
      </View>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                index={0}
                enablePanDownToClose={false}
                enableHandlePanningGesture={false}
                enableContentPanningGesture={false}
                backgroundStyle={styles.bottomSheetBackground}
                handleIndicatorStyle={{
                    display: 'none',
                }}
            >
                <BottomSheetView style={styles.bottomSheetContent}>
                    <KeyboardAvoidingView
                        behavior="padding"
                        style={{ flex: 1 }}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
                    >
                        <ScrollView
                            contentContainerStyle={{ paddingBottom: 40 }}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.sheetContent}>
                                <View style={{ flexDirection: "row", paddingHorizontal: 10, gap: 10, justifyContent: "space-between" }}>
                                    <Text style={styles.title}>Share Invoices</Text>
                                    <Icons name="cross" size={22} color="black" />
                                </View>
                                <View style={styles.containe}>
                                    <TextInput
                                        style={styles.inputs}
                                        value={email}
                                        onChangeText={setEmail}
                                        placeholder="Type the email"
                                        keyboardType="email-address"
                                        placeholderTextColor="#677582"
                                    />
                                    <View
                                        style={{
                                            height: 0,
                                            width: '98%',
                                            borderBottomWidth: 0.6,
                                            borderColor: '#6775823D',
                                            marginVertical: "20%",
                                            alignSelf: 'center',
                                        }}
                                    />
                                    <View style={{ padding: 4, backgroundColor: "#F1F1F1", borderRadius: 10 }}>
                                        <Text style={{ fontSize: 15, fontWeight: "500", color: "#677582", margin: 10, marginHorizontal: "8%" }}>Estimates Link</Text>
                                        <View
                                            style={{
                                                height: 0,
                                                width: '100%',
                                                borderBottomWidth: 0.6,
                                                borderColor: '#6775823D',
                                                marginVertical: "1%",
                                                alignSelf: 'center',
                                            }}
                                        />
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                                            <Text style={{ fontSize: 15, fontWeight: "500", color: "#DF7300", margin: 10 }}>www.buepay/envoice/086...</Text>
                                            <Image source={require("../../assets/Images/document-copy.png")} />
                                        </View>

                                    </View>
                                    <View style={styles.btn}>
                                        <TouchableOpacity
                                            style={styles.upgradeButton}
                                            onPress={() => props.navigation.navigate("Congrate")}
                                        >
                                            <Text style={styles.upgradeButtonText}>Send Email</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B2B2B96',
    },
    btn: {
        paddingVertical: "12%"
    },
    invotxt: {
        margin: 20 
      },
      invtext: {
        fontSize: 18, 
        color: "black", 
        fontWeight: "bold"
      },
    header: {
        height: 74,
        width: "100%",
        backgroundColor: "#00386D"
    },
    invoiceDetails: { margin: 20 },
    invoiceLabel: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
    invoiceBox: {
      backgroundColor: 'gray', borderWidth: 0.3,
      borderRadius: 10, borderColor:"white",
      padding: 15
    },
    invoiceFrom: { fontWeight: 'bold', marginBottom: 6 },
    invoiceText: { color: '#333', marginBottom: 10 },
    bottomSheetBackground: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        borderWidth: 0.2, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    },
    bottomSheetContent: {
        flex: 1, elevation: 12
    },
    sheetContent: {
        padding: 20,
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: "10%",
        color: "#727284", margin: 1
    },
    upgradeButton: {
        backgroundColor: '#00386D',
        borderRadius: 15,
        padding: 16, justifyContent: "flex-end",
        alignItems: 'center', marginTop: "1%"
    },
    upgradeButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    containe: {
        padding: 10,
        backgroundColor: '#fff',
        flex: 1,
    },
    labels: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 4,
        color: '#333',
    },
    inputs: {
        height: 45, width: "95%",
        borderColor: '#ccc',
        borderWidth: 0.6,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF', marginTop: "3%"
    },
    headerContent: {
        flexDirection: "row",
        margin: 20,
        gap: 10,
        alignItems: "center",
        marginTop: 24
    },
    headerTitle: {
        fontSize: 17,
        color: "white",
        flex: 1
    },
    deleteButton: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: "#A6D4FF66",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        borderWidth: 0.5,
        borderColor: "white",
        marginHorizontal: 15
    },
});

export default ShareInvoice;