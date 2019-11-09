import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 40 },
    { name: 'Friend #3', age: 23 },
    { name: 'Friend #4', age: 53 },
    { name: 'Friend #5', age: 12 },
    { name: 'Friend #6', age: 13 },
    { name: 'Friend #7', age: 52 },
    { name: 'Friend #8', age: 10 },
    { name: 'Friend #9', age: 43 },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        );       
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
