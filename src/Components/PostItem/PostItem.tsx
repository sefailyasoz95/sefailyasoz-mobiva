import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RedditChild} from '../../Constants/types';

type Props = {
  item: RedditChild;
};

const PostItem = ({item}: Props) => {
  const date = new Date(item.data.created);
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{uri: item.data.thumbnail}} style={styles.img} />
      <View style={styles.rightSection}>
        <Text style={styles.date}>{date.toDateString()}</Text>
        <Text style={styles.title}>{item.data.title}</Text>
        <View style={styles.bottom}>
          <Text>{item.data.author_fullname}</Text>
          <Text>{item.data.score}</Text>
          <Text>{item.data.num_comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
    marginVertical: 10,
    padding: 5,
    borderRadius: 10,
  },
  img: {
    width: '35%',
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10,
    margin: 2,
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  date: {
    fontStyle: 'italic',
  },
  title: {
    fontWeight: '500',
    marginVertical: 5,
  },
});
