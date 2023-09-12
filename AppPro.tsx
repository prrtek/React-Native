/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.container}>
      <TextInput>Default</TextInput>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        Prateek
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});

export default AppPro;
