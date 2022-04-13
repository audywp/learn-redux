import {Text} from 'react-native';
import React, {Children} from 'react';

export default function Poppins({size = 12, color = 'black', children}) {
  return (
    <Text testID="text component" style={{fontSize: size, color: color}}>
      {children}
    </Text>
  );
}
