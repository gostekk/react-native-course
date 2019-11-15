import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation}) => {
  const { navigate } = navigation

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigate('Components')}
        title="Go to Components Demo"
        color="green"
      />
      <Button
        onPress={() => navigate('List')}
        title="Go to List Demo"
        color="black"
      />
      <Button
        onPress={() => navigate('Image')}
        title="Go to Image Demo"
        color="red"
      />
      <Button
        onPress={() => navigate('Counter')}
        title="Go to Counter Demo"
        color="blue"
      />
      <Button
        onPress={() => navigate('Color')}
        title="Go to Color Demo"
        color="magenta"
      />
      <Button
        onPress={() => navigate('Square')}
        title="Go to Square Demo"
        color="lime"
      />
      <Button
        onPress={() => navigate('Text')}
        title="Go to Text Demo"
        color="cyan"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
