import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Home(props) {
  const {name, age} = useSelector(state => state.profile);
  const {listTopTab} = useSelector(state => state.home);

  return (
    <View>
      <Text>Home</Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
}
