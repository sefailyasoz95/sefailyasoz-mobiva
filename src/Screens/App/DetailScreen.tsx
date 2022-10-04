import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppStackParams} from '../../Constants/AppStackParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParams, 'DetailScreen'>;
  route: RouteProp<AppStackParams, 'DetailScreen'>;
};

const DetailScreen = ({navigation, route}: Props) => {
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
