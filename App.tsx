import React from 'react';

import {View, Text, SafeAreaView, TextInput} from 'react-native';

const name = 'Prateek';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hi {name}</Text>
        <TextInput>Hii</TextInput>
      </View>
    </SafeAreaView>
  );
}

export default App;
