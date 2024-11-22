Improvements

1. Youtube link: https://youtu.be/TFDuxqA1BRk

2. Total number of Items: 26 and their prices included.

3. App.js line 10: added - import { NavigationContainer } from '@react-navigation/native';

4. Added a HomeScreen.js with the following code:
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const [menu, setMenu] = useState(route.params?.menu || []);

  const getAveragePrices = () => {
    const courseMap = {};
    menu.forEach((item) => {
      if (!courseMap[item.course]) courseMap[item.course] = [];
      courseMap[item.course].push(item.price);
    });

    return Object.entries(courseMap).map(([course, prices]) => {
      const avgPrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;
      return `${course}: $${avgPrice.toFixed(2)}`;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.menuItem}>
            {item.name} - ${item.price} ({item.course})
          </Text>
        )}
      />
      <Text style={styles.averageTitle}>Average Prices:</Text>
      {getAveragePrices().map((avg, index) => (
        <Text key={index} style={styles.averageText}>{avg}</Text>
      ))}
      <Button title="Manage Menu" onPress={() => navigation.navigate('Menu Management', { menu })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  menuItem: { fontSize: 18, marginVertical: 5 },
  averageTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
  averageText: { fontSize: 16, marginTop: 5 },
});

5. Edited the EditMenuScreen.js by adding the following styling: 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  dishItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  dishName: { fontSize: 18, fontWeight: 'bold' },
  dishDetails: { fontSize: 14, color: '#666' },
  editForm: { marginTop: 20, padding: 15, backgroundColor: '#fff', borderRadius: 8 },
  formTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});





