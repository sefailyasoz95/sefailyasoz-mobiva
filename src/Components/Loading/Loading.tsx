import {ActivityIndicator, ColorValue, StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  color?: ColorValue;
  size?: number | 'large' | 'small';
};

const Loading: React.FC<Props> = React.memo(({color, size}: Props) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
});

export default Loading;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: '50%',
  },
});
