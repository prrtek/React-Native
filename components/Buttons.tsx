import {View, Text, Button} from 'react-native';
import React from 'react';

const Buttons = () => {
  return (
    <View>
      <Button
        title="submit"
        onPress={() => console.log('Button clicked')}
        color="red"
      />
    </View>
  );
};

export default Buttons;
