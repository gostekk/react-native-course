import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
  const { title, imageSource, score } = props

  return (
    <View>
      <Text>
        <Image source={imageSource} />
        <Text>{ title ? title : "Untitled" }</Text>
        <Text>Image Score - { score ? score : 0 }</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ImageDetail;
