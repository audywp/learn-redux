import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setNama, setAge} from './redux/action';

export default function Profile() {
  const dispatch = useDispatch();

  const nama = useSelector(state => state.profile.name);
  const age = useSelector(state => state.profile.age);

  const [myName, setMyName] = useState('');
  const [hobbies] = useState(['tidur', 'makan', 'tidur lagi']);

  return (
    <View>
      <Text>Profile</Text>

      <Text>{hobbies}</Text>

      <TextInput
        placeholder="isikan nama anda"
        onChangeText={text => setMyName(text)}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(setNama(myName));
          dispatch(setAge(30));
        }}>
        <Text>update nama</Text>
      </TouchableOpacity>
      <Text>
        nama saya {nama}, saya {age} tahun
      </Text>
    </View>
  );
}
