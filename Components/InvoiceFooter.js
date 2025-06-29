import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';

const InvoiceFooter = (props) => {
  return (
   <View>
     <View style={styles.footer}>
           <TouchableOpacity style={styles.draftButton} onPress={props.onpress}>
             <Text style={styles.draftText}>{props.tex}</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.continueButton} onPress={props.onPress}>
             <Text style={styles.continueText}>{props.text}</Text>
           </TouchableOpacity>
         </View>
   </View>
  );
};

export default InvoiceFooter;
const styles=StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: '#00386D',
        padding: 16,
        justifyContent:"space-around"
      },
      draftButton: {
        backgroundColor: '#002C57',
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 12,
      },
      continueButton: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 12,
      },
      draftText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
      },
      continueText: {
        color: '#00386D',
        fontSize: 14,
        fontWeight: '600',
      },
})
