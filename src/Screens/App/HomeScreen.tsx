import {
  FlatList,
  LayoutAnimation,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {AppStackParams} from '../../Constants/AppStackParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../Redux/store/store';
import {getPosts} from '../../Redux/actions/actions';
import PostItem from '../../Components/PostItem/PostItem';
import Loading from '../../Components/Loading/Loading';
import {clearPosts} from '../../Redux/reducers/reducers';

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

  const handleEndReached = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    dispatch(getPosts({limit: 10, after}));
  }, [posts]);
  const onRefresh = () => {
    dispatch(clearPosts());
    setTimeout(() => {
      dispatch(getPosts({limit: 10, after}));
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mobiva</Text>
      {loading && <Loading />}
      {posts.length < 1 && !loading && (
        <View style={styles.title}>
          <Text>We couldn't find enough posts to show you, sorry!</Text>
        </View>
      )}
      {posts.length > 1 && !loading && (
        <FlatList
          data={posts}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={25}
          onEndReached={handleEndReached}
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
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    color: 'black',
  },
});
