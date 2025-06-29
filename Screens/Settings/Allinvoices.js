import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Entypo";

const Allinvoices = (props) => {
    const [selectedPage, setSelectedPage] = useState(1);
    const invoiceData = [
        {
            status: "Paid",
            views: "Viewed: 4 views",
            invoiceNumber: "Invoice #001",
            bankName: "Banco de Fomento Angola",
            amount: "200.000 USD"
        },
        {
            status: "Paid",
            views: "Viewed: 4 views",
            invoiceNumber: "Invoice #001",
            bankName: "Banco de Fomento Angola",
            amount: "200.000 USD"
        },
        {
            status: "Paid",
            views: "Viewed: 4 views",
            invoiceNumber: "Invoice #001",
            bankName: "Banco de Fomento Angola",
            amount: "200.000 USD"
        },
        {
            status: "Paid",
            views: "Viewed: 4 views",
            invoiceNumber: "Invoice #001",
            bankName: "Banco de Fomento Angola",
            amount: "200.000 USD"
        },
    ];
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ height: "5%", width: "100%", backgroundColor: "#00386D" }}>
                <View style={{ flexDirection: "row", margin: "10%", gap: 10, alignItems: "center" }}>
                <TouchableOpacity onPress={()=>{
                    props.navigation.goBack();
                }}>
                <Icons name="arrowleft" size={22} color="white" />
                </TouchableOpacity>
                    <Text style={{ fontSize: 17, color: "white" }}>Invoices</Text>
                    <View style={{ marginHorizontal: "20%" }}>
                        <TouchableOpacity style={{
                            paddingVertical: 10,
                            backgroundColor: "#D9D9D926",
                            borderRadius: 10,
                            paddingHorizontal: 22,
                            marginBottom: 5,
                            flexDirection: "row", alignSelf: "center", gap: 2
                        }}>
                            <Text style={{ fontSize: 15, color: "white", fontWeight: "500" }}>All Invoices</Text>
                            <Icons name="down" size={18} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ margin: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 15, color: "#FB724C", fontWeight: "500" }}>Invoices</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        {[1, 2, 3, 4].map((page) => (
                            <TouchableOpacity
                                key={page}
                                onPress={() => setSelectedPage(page)}
                                style={{
                                    height: 30,
                                    width: 30,
                                    backgroundColor: selectedPage === page ? "#FB724C" : "transparent",
                                    borderRadius: 15,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                <Text style={{
                                    color: selectedPage === page ? "white" : "black",
                                    fontSize: 15
                                }}>
                                    {page}
                                </Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity onPress={() => setSelectedPage(selectedPage < 4 ? selectedPage + 1 : 4)}>
                            <Text style={{ fontSize: 15, color: "#FB724C", fontWeight: "500" }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {invoiceData.map((invoice, index) => (
                    <View key={index} style={{
                        marginHorizontal: "4%",
                        marginBottom: 20,
                        padding: 15,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#E0E0E0'
                    }}>
                        <Icon name="dots-three-horizontal" size={22} style={{ alignSelf: "flex-end" }} />
                        <View style={{ flexDirection: 'row', marginBottom: 8, gap: 10 }}>
                            <View style={{
                                height: 35,
                                width: 45,
                                backgroundColor: "#E0E0E0",
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text style={{ fontWeight: 'bold', color: "#34A853" }}>{invoice.status}</Text>
                            </View>
                            <View style={{
                                height: 35,
                                width: 140,
                                backgroundColor: "#36AECF3B",
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text style={{ fontWeight: 'bold', color: "#2B9DE0", fontSize: 12 }}>{invoice.views}</Text>
                            </View>
                        </View>
                        <Text style={{ fontWeight: '800', marginBottom: 5, fontSize: 18, color: "#0D062D" }}>{invoice.invoiceNumber}</Text>
                        <Text style={{ marginBottom: 5 }}>{invoice.bankName}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{invoice.amount}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Allinvoices;