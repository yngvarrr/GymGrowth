import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({label, onPress}) {
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: `#004C5C`,
        padding:15,
        borderRadius: 10,
        marginBottom: 30,
        alignSelf:'stretch',
        zIndex:-1
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 15,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}