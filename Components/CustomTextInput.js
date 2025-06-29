import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ label, value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: '#6B7280', // Tailwind's text-gray-500
    marginBottom: 4,
  },
  input: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB', // Tailwind's border-gray-200
    borderRadius: 10,
    fontSize: 16,
    color: '#111827', // Tailwind's text-gray-900
    backgroundColor: '#fff',
  },
});

export default CustomTextInput;
