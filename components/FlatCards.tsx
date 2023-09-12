/* eslint-disable prettier/prettier */

// There Are Some errors in the file
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text>Flat Text </Text>
      <View>
        <View style={[styles.red, styles.box]}>
          <Text>Red</Text>
        </View>
        <View style={styles.pink}>
          <Text>pink</Text>
        </View>
        <View style={styles.green}>
          <Text>green</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifycontent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
  red: {
    backgroundColor: 'red',
  },
  pink: {
    backgroundColor: 'pink',
  },
  green: {
    backgroundColor: 'green',
  },
});

export default FlatCards;
