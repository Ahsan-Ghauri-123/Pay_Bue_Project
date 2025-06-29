import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewInvoice from '../Screens/Invoices/NewInvoice';
import { useNavigation } from '@react-navigation/native';

const ModalActionSheet = ({ visible, onClose}) => {
  const navigation = useNavigation();
  const options = [
    {
      icon: 'file-document-outline',
      label: 'Create a new invoice',
      onPress: () => {
        onClose();
        navigation.navigate('NewInvoice');
      },
    },
    {
      icon: 'file-chart-outline',
      label: 'Create a new estimate',
      onPress: () => {
        onClose();
      },
    },
    {
      icon: 'file-document-outline',
      label: 'Create a new client',
      onPress: () => {
        onClose();
      },
    },
  ];
  if (!visible) return null;

  return (
    <Pressable style={styles.overlay} onPress={onClose}>
      <View style={styles.modal}>
        {options.map((item, index) => (
          <TouchableOpacity key={index} style={styles.option} onPress={item.onPress}>
            <MaterialCommunityIcons name={item.icon} size={22} color="#727284" />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Pressable>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width: '100%',
    backgroundColor: 'rgba(60, 60, 67, 0.3)',
    justifyContent: 'flex-end', padding:20
  },
  modal: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 25,
   borderRadius:10,
    marginBottom: 60,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  label: {
    marginLeft: 12,
    fontSize: 16,
    color: '#727284',
  },
});

export default ModalActionSheet;
