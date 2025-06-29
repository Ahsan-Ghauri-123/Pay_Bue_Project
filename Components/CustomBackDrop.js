import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

const CustomBackdrop = ({ style, animatedIndex, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.backdrop, style]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent', // 👈 dim transparent gray
  },
});

export default CustomBackdrop;
