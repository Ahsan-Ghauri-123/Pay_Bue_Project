import React, { useState, useRef, useMemo } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Switch, FlatList } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";
import PreviewInvoice from '../Screens/Invoices/PreviewInvoice';

const InvoiceHeader = (props) => {
    const navigation = useNavigation();
  return (
    <View>
    <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>New Invoice</Text>
            <TouchableOpacity style={styles.previewButton} onPress={()=>{
              navigation.navigate("PreviewInvoice");
            }}>
              <Text style={styles.previewText}>Preview</Text>
              <Ionicons name="eye-outline" size={16} color="white" />
            </TouchableOpacity>
          </View>
    </View>
  );
};

export default InvoiceHeader;
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: {
      backgroundColor: '#00386D',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      justifyContent: 'space-between',
    },
    headerTitle: { color: 'white', fontSize: 18, fontWeight: '600' },
    previewButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#004B8A',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
    },
    previewText: { color: 'white', marginRight: 4, fontSize: 14 },
});