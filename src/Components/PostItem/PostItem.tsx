import {
  GestureResponderEvent,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RedditChild} from '../../Constants/types';
import {WEB_URL} from '../../Constants/api';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {PlaceholderImage} from '../../Constants/dummy';
import SpecDisplayer from '../SpecDisplayer/SpecDisplayer';

type Props = {
  item: RedditChild;
};

const PostItem = ({item}: Props) => {
  const date = new Date(item.data.created * 1000);
  const handlePress = async () => {
    const url = `${WEB_URL}${item.data.permalink}`;
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#000',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'pageSheet',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#000',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: {
          header: item.data.title,
        },
      });
    } else Linking.openURL(url);
  };
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <Image
        source={{
          uri: item.data.over_18 ? PlaceholderImage : item.data.thumbnail,
        }}
        style={styles.img}
      />
      <View style={styles.rightSection}>
        <Text style={styles.date}>{date.toDateString()}</Text>
        <Text style={styles.title}>{item.data.title}</Text>
        <View style={styles.bottom}>
          <SpecDisplayer text={`${item.data.author_fullname} ✏`} key={1} />
          <SpecDisplayer text={`${item.data.score} 👍`} key={2} />
          <SpecDisplayer text={`${item.data.num_comments} 💬`} key={3} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
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
    alignSelf: 'center',
    margin: 2,
  },
  rightSection: {
    flex: 1,
    justifyContent: 'space-around',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '98%',
    alignSelf: 'flex-end',
  },
  date: {
    fontStyle: 'italic',
    color: 'gray',
    alignSelf: 'flex-end',
  },
  title: {
    fontWeight: '500',
    marginVertical: 5,
    color: 'black',
  },
});
