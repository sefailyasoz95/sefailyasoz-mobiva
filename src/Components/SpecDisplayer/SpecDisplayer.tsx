import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  text: string;
};

const SpecDisplayer: React.FC<Props> = React.memo(({text}: Props) => {
  return (
    <Pressable style={styles.pressable}>
      <Text style={styles.bottomText}>{text}</Text>
    </Pressable>
  );
});

export default SpecDisplayer;

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  bottomText: {
    color: 'white',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
