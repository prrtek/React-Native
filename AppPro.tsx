import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Text style={styles.text}>HII</Text>
      </View>
    </SafeAreaView>
  );
}
