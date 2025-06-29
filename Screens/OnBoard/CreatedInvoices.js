import React, { useState, useRef, useMemo } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Switch, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import FooterInvoice from '../../Components/FooterInvoice';
import InvoiceFooter from '../../Components/InvoiceFooter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InvoiceHeader from '../../Components/InvoiceHeader';

const CreatedInvoices = (props) => {
    const [isSheetNotOpen, setIsSheetNotOpen] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [email, setEmail] = useState('');
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['60%'], []);
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    const openBottomSheet = () => {
        setIsBottomSheetVisible(true);
        setTimeout(() => bottomSheetRef.current?.expand());
    };
    return (
        <SafeAreaView style={styles.container}>
        {
            !isSheetOpen && (
                <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>Created Invoice</Text>
                    <TouchableOpacity style={styles.previewButton} onPress={() => {
                        props.navigation.navigate("PreviewInvoice");
                    }}>
                        <Text style={styles.previewText}>Preview</Text>
                        <Ionicons name="eye-outline" size={16} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
            {
                isSheetOpen && (
                    <InvoiceHeader />
                )
            }
            {isSheetOpen && (
                <View style={styles.invoiceDetails}>
                    <Text style={styles.invoiceLabel}>Invoice Details</Text>
                    <View style={styles.invoiceBox}>
                        <Text style={styles.invoiceFrom}>FROM</Text>
                        <Text style={styles.invoiceText}>
                            Company Name{"\n"}California, Los Angels{"\n"}6454 Iowa City, CA{"\n"}United States
                        </Text>
                        <Text style={styles.editProfile}>Edit Profile</Text>
                    </View>
                </View>
            )}
            {!isSheetOpen && (
                <>
                    <Text style={styles.invoiceNumber}>Invoice #08326</Text>
                    <View style={styles.invoiceContainer}>
                        <Image
                            source={require("../../assets/Images/invoice.png")}
                            style={styles.invoiceImage}
                        />
                    </View>
                    <InvoiceFooter onPress={openBottomSheet} text="Download" tex="Share" onpress={openBottomSheet} />
                </>
            )}
            {
                isBottomSheetVisible && (
                    <BottomSheet
                        ref={bottomSheetRef}
                        snapPoints={snapPoints}
                        index={-1}
                        enablePanDownToClose={true}
                        onChange={(index) => setIsSheetOpen(index !== -1)}
                        backgroundStyle={{
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
                        }}
                        backdropComponent={(props) => (
                            <BottomSheetBackdrop
                                {...props}
                                appearsOnIndex={0}
                                disappearsOnIndex={-1}
                                opacity={0.5}

                            />
                        )}
                        handleIndicatorStyle={{
                            display: 'none',
                        }}
                    >
                        <BottomSheetView style={{
                            flex: 1, elevation: 13
                        }}>
                            <KeyboardAvoidingView
                                behavior="padding"
                                style={{ flex: 1 }}
                            >
                                <ScrollView
                                    contentContainerStyle={{ paddingBottom: 40 }}
                                    keyboardShouldPersistTaps="handled"
                                    showsVerticalScrollIndicator={false}
                                >
                                    <View style={{
                                        padding: 20,
                                    }}>
                                        <View style={{ flexDirection: "row", paddingHorizontal: 10, gap: 10, justifyContent: "space-between" }}>
                                            <Text style={{
                                                fontSize: 15,
                                                fontWeight: '500',
                                                marginBottom: "10%",
                                                color: "#727284", margin: 1
                                            }}>Share Invoices</Text>
                                            <Icon name="cross" size={22} color="black" />
                                        </View>
                                        <View style={{
                                            padding: 10,
                                            backgroundColor: '#fff',
                                            flex: 1,
                                        }}>
                                            <TextInput
                                                style={{
                                                    height: 45, width: "95%",
                                                    borderColor: '#ccc',
                                                    borderWidth: 0.6,
                                                    borderRadius: 8,
                                                    paddingHorizontal: 10,
                                                    backgroundColor: '#FFFFFF', marginTop: "3%"
                                                }}
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
                                                    marginVertical: "13%",
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
                                            <View style={{ paddingVertical: "12%" }}>
                                                <TouchableOpacity
                                                    style={{
                                                        backgroundColor: '#00386D',
                                                        borderRadius: 15,
                                                        padding: 16, justifyContent: "flex-end",
                                                        alignItems: 'center', marginTop: "1%"
                                                    }}
                                                    onPress={() => props.navigation.navigate("Congrate")}
                                                >
                                                    <Text style={{
                                                        color: 'white',
                                                        fontSize: 18,
                                                        fontWeight: 'bold',
                                                    }}>Send Email</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </KeyboardAvoidingView>
                        </BottomSheetView>
                    </BottomSheet>
                )
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    invoiceDetails: { margin: 20 },
    invoiceLabel: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
    invoiceBox: {
        backgroundColor: 'white', borderWidth: 0.2,
        borderRadius: 10, borderColor: "black",
        padding: 15
    },
    invoiceFrom: { fontWeight: 'bold', marginBottom: 6 },
    invoiceText: { color: '#333', marginBottom: 10 },
    editProfile: { textAlign: "right", color: "#43bfe6" },
    header: {
        height: 74,
        width: "100%",
        backgroundColor: "#00386D"
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
    statusContainer: {
        flexDirection: 'row',
        marginBottom: 8,
        gap: 10,
        margin: 20, marginTop: "10%"
    },
    paidStatus: {
        height: 35,
        width: 45,
        backgroundColor: "#E0E0E0",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    paidText: {
        fontWeight: 'bold',
        color: "#34A853"
    },
    previewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#004B8A',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
      },
      previewText: { color: 'white', marginRight: 4, fontSize: 14 },
    viewedStatus: {
        height: 35,
        width: 140,
        backgroundColor: "#00386D36",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    viewedText: {
        fontWeight: 'bold',
        color: "#2B9DE0",
        fontSize: 12
    },
    invoiceNumber: {
        fontWeight: 'bold',
        color: "#12153A",
        fontSize: 18, marginTop: "10%", marginHorizontal: "10%"
    },
    invoiceContainer: {
        flex: 1, marginTop: "5%"
    },
    invoiceImage: {
        marginBottom: 20, resizeMode: "contain", alignSelf: "center"
    },
    actionBar: {
        height: 150,
        backgroundColor: "#00386D",
        width: "100%"
    },
    buttonGroup: {
        flexDirection: "row",
        marginVertical: "6%",
        alignItems: "center",
        justifyContent: "center",
        gap: 15
    },
    shareButton: {
        paddingVertical: 10,
        backgroundColor: "#FFFFFF63",
        borderRadius: 10,
        paddingHorizontal: 40,
        marginBottom: 5,
        borderWidth: 0.5,
        borderColor: "white"
    },
    shareButtonText: {
        fontSize: 15,
        color: "white",
        fontWeight: "500"
    },
    downloadButton: {
        paddingVertical: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 35,
        marginBottom: 5
    },
    downloadButtonText: {
        fontSize: 15,
        color: "#00386D",
        fontWeight: "500"
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
});

export default CreatedInvoices;