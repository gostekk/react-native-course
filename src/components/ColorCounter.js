import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = (props) => {
  const { color, value, onIncrease, onDecrease } = props;

  return (
    <View>
      <Text>{ color } - { value }</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => onDecrease()}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ColorCounter;
