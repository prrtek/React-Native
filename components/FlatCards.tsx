/* eslint-disable prettier/prettier */

// There Are Some errors in the file
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Flat Cards </Text>
        <View style={styles.container}>
          <View style={[styles.red, styles.box]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.pink, styles.box]}>
            <Text>pink</Text>
          </View>
          <View style={[styles.green, styles.box]}>
            <Text>green</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
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
