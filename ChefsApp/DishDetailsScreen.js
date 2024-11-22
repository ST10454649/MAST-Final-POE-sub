import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DishDetailsScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Spaghetti</Text>
      <Text>Chef: Chef John</Text>
      <View style={styles.buttons}>
        <Button title="Like" onPress={() => {}} />
        <Button title="Comment" onPress={() => {}} />
      </View>
      <Text style={styles.description}>This is a delicious spaghetti dish...</Text>
    </View>
  );
};



export default DishDetailsScreen;
