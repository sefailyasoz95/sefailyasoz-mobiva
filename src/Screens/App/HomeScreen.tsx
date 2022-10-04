import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {AppStackParams} from '../../Constants/AppStackParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../Redux/store/store';
import {getPosts} from '../../Redux/actions/actions';
import PostItem from '../../Components/PostItem/PostItem';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'HomeScreen'>;
  route: RouteProp<AppStackParams, 'HomeScreen'>;
};

const HomeScreen = ({navigation, route}: Props) => {
  const dispatch = useAppDispatch();
  const {after, posts, loading} = useAppSelector(state => state.global);
  useEffect(() => {
    dispatch(getPosts({limit: 10, after}));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={'black'} size="large" />
        </View>
      ) : posts.length < 1 ? (
        <View style={styles.loading}>
          <Text>We couldn't find enough posts to show you, sorry!</Text>
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={({item, index}) => <PostItem item={item} key={index} />}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
