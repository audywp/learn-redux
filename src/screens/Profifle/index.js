import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Profile() {
  const nama = useSelector(state => state.profile.name);
  const age = useSelector(state => state.profile.age);
  return (
    <View>
      <Text>Profile</Text>

      <Text>{}</Text>

      <TextInput
        placeholder="isikan nama anda"
        // onChangeText={text => setNama(text)}
      />
      <TouchableOpacity>
        <Text>update nama</Text>
      </TouchableOpacity>
      <Text>
        nama saya {nama}, saya {age} tahun
      </Text>
    </View>
  );
}
