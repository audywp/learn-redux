import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {ms} from 'react-native-size-matters';
import {IMAGE_URL} from '../../Helpers/api';
import {getDataMovie, getDetailMovieById} from './redux/action';

export default function Home(props) {
  const {loading, theme} = useSelector(state => state.Global);
  const dispatch = useDispatch();

  const {nowPlaying = []} = useSelector(state => state.home);

  const getDataMovies = () => {
    dispatch(getDataMovie()); // dispatch untuk fetching
  };

  const getMovieByID = item => {
    dispatch(getDetailMovieById(item.id));
  };

  const MovieContainer = ({item}) => {
    return (
      <TouchableOpacity onPress={() => getMovieByID(item)}>
        <Image
          source={{uri: `${IMAGE_URL}${item.poster_path}`}}
          resizeMode="contain"
          style={{height: ms(200), width: ms(200)}}
        />
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size={ms(120)} />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={nowPlaying}
        keyExtractor={item => item.id}
        renderItem={MovieContainer}
      />
      <TouchableOpacity onPress={getDataMovies}>
        <Text style={{color: theme === 'light' ? 'black' : 'white'}}>
          get data Now Playing
        </Text>
      </TouchableOpacity>
      <Text>Home</Text>
    </View>
  );
}
