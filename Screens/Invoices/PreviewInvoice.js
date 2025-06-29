import React, { useState, useRef, useMemo } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Switch, FlatList } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";

const PreviewInvoice = (props) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['82%'], []);
  const openBottomSheet = () => bottomSheetRef.current?.expand();
  return (
    <GestureHandlerRootView style={styles.container}>
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
        }}>
        <BottomSheetView style={styles.bottomSheetContent}>
          <View style={styles.sheetContent}>
            <View style={{ flexDirection: "row", paddingHorizontal: 10, gap: 10 }}>
             <TouchableOpacity onPress={()=>{
                props.navigation.goBack();
             }}>
             <Icons name="arrowleft" size={22} color="727284" />
             </TouchableOpacity>
                <Text style={styles.title}>Return to form</Text>
            </View>
            <Image source={require("../../assets/Images/invoice.png")} style={{justifyContent:"center", alignItems:"center"}} />
            <View style={styles.btn}>
              <TouchableOpacity style={styles.upgradeButton} onPress={() => {
                props.navigation.navigate("Payment")
              }}>
                <Text style={styles.upgradeButtonText}>Continue my upgrade</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    paddingVertical: "40%"
  },
  containers: {
    backgroundColor: '#DEDEDE36',
    borderRadius: 12,
    padding: 20,
    margin: 15,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12153A',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    fontSize: 16,
    color: '#666666',
  },
  value: {
    fontSize: 16,
    color: '#12153A',
    fontWeight: '500',
  },
  totalLabel: {
    fontSize: 17,
    color: '#12153A',
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 17,
    color: '#12153A',
    fontWeight: 'bold',
  },
  dimensions: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    marginTop: 16,
  },
  buepay: {
    fontSize: 13, color: "#12153A"
  },
  tax: {
    width: "88%", borderWidth: 0.5, alignSelf: "center"
  },
  redBackgroundg: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#E59617',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute', left: "100%", bottom: "99%"
  },
  scrollView: {
    flex: 1,
  },
  settingsButton: {
    marginHorizontal: 20,
  },
  settingsIcon: {
    height: 42,
    width: '13%',
    alignSelf: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: "8%",
    color: "#727284", margin: 1
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: "8%",
    color: "#E59617", margin: 1, letterSpacing: 1
  },
  monthtext: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: "8%",
    color: "#677582", letterSpacing: 1
  },
  subtitle: {
    fontSize: 15,
    color: '#12153A',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 12,
  },
  planName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10, marginTop: 1
  },
  planPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E59617', marginTop: 1,
  },
  perText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white',
  },
  redBackground: {
    backgroundColor: '#12153A',
    width: '100%',
    padding: 10,
    borderRadius: 12, marginBottom: 8, position: 'relative',
  },
  featureList: {
    maxHeight: 270,
    marginBottom: 4,
  },
  featureItem: {
    fontSize: 12,
    marginBottom: 1,
    color: '#12153A', margin: "1%", marginHorizontal: "2%"
  },
  taxNote: {
    fontSize: 14,
    color: '#FF8A1C',
    fontStyle: 'italic', marginTop: "5%"
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
  },
  toggleLabel: {
    fontSize: 14,
    marginHorizontal: 8,
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
});

export default PreviewInvoice;