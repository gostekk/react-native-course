import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const changeValue = 5;

  const checkValue = (value, change) => value + change > 255 || value + change < 0 ? value : value + change;

  return (
    <View>
      <ColorCounter
        color="Red"
        value={red}
        onIncrease={() => setRed(checkValue(red, changeValue))}
        onDecrease={() => setRed(checkValue(red, -changeValue))}
      />
      <ColorCounter
        color="Green"
        value={green}
        onIncrease={() => setGreen(checkValue(green, changeValue))}
        onDecrease={() => setGreen(checkValue(green, -changeValue))}
      />
      <ColorCounter
        color="Blue"
        value={blue}
        onIncrease={() => setBlue(checkValue(blue, changeValue))}
        onDecrease={() => setBlue(checkValue(blue, -changeValue))}
      />

      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default SquareScreen;
