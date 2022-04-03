import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import {useDispatch, useSelector} from 'react-redux';
import {Text, TouchableOpacity} from 'react-native';
import {setTHeme} from '../store/globalAction';
import {navigationRef} from '../Helpers/navigate';

const Root = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector(state => state.Global);
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: theme === 'light' ? 'white' : 'black',
      card: 'rgb(255, 255, 255)',
      text: theme === 'light' ? 'rgb(28, 28, 30)' : 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  const changeTheme = () => {
    if (theme === 'light') {
      dispatch(setTHeme('dark'));
    } else {
      dispatch(setTHeme('light'));
    }
  };

  return (
    <>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <TouchableOpacity onPress={changeTheme}>
          <Text>Change Theme</Text>
        </TouchableOpacity>
        <MainStack />
      </NavigationContainer>
    </>
  );
};

export default Root;
