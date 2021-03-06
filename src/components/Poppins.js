import {Text} from 'react-native';
import React from 'react';

export default function Poppins({size = 14, color = 'black', children}) {
  return (
    <Text testID="text component" style={{fontSize: size, color: color}}>
      {children}
    </Text>
  );
}
