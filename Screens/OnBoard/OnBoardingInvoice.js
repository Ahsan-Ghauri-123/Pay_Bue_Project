import React, { useState, useRef, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import InvoiceHeader from '../../Components/InvoiceHeader';
import InvoiceFooter from '../../Components/InvoiceFooter';

const OnBoardingInvoice = (props) => {
  const navigation = useNavigation();

  const invoiceTemplates = [
    { id: '1', image: require('../../assets/Images/invoice.png'), label: 'Arrumado' },
    { id: '2', image: require('../../assets/Images/invoice.png'), label: 'Clássico' },
  ];

  const [selectedId, setSelectedId] = useState(1);

  const handleSelect = (id) => {
    setSelectedId(prev => (prev === id ? null : id));
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;

    return (
      <TouchableOpacity style={styles.card} onPress={() => handleSelect(item.id)}>
        <Image source={item.image} style={styles.image} />
        {isSelected && (
          <View style={styles.checkIcon}>
            <Icon name="check-circle" size={24} color="#28c76f" />
          </View>
        )}
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <InvoiceHeader />
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <ScrollView>
      <View style={styles.content}>
      <Text style={styles.sectionTitle}>Invoice Model</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={invoiceTemplates}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
    <InvoiceFooter text="Generate" onPress={()=>{
        props.navigation.navigate("CreatedInvoices");
    }} tex="Save as draft" />
    </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoardingInvoice;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 220,
    height: 240,
    borderRadius: 10,
    resizeMode: 'contain', borderWidth:0.4
  },
  checkIcon: {
    position: 'absolute',
    top: 3,
    right: 40,
    backgroundColor: '#3bf560',
    borderRadius: 12,
  },
  label: {
    marginTop: 8,
    fontSize: 16,
    color: '#1fb1f0',
    fontWeight: '500', textDecorationLine:"underline"
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#12153A',
    margin: 15,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#E6E6E6',
    marginHorizontal: 1,
    borderRadius: 2,
  },
  progressFill: {
    width: '65%',
    height: '100%',
    backgroundColor: '#00B050',
    borderRadius: 2,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
