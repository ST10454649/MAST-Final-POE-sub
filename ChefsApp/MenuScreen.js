import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const dishes = [
 <Text>Starters</Text>,
  { id: '1', name: 'Pickled jalapeños, prawn ceviche and avocado purée', chef: 'Chef Anna', category: 'Starters', comments: 25, image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Beef Tartare', chef: 'Chef John', category: 'Starters', comments: 18, image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Foie Gras Torchon Recipe', chef: 'Chef Marie', category: 'Starters', comments: 22, image: 'https://via.placeholder.com/150' },
  { id: '4', name: 'Octopus, chorizo and pickled purple carrots', chef: 'Chef Juan', category: 'Starters', comments: 19, image: 'https://via.placeholder.com/150' },
  { id: '5', name: 'Oysters Rockefeller', chef: 'Chef Emily', category: 'Starters', comments: 21, image: 'https://via.placeholder.com/150' },
  { id: '6', name: 'Seared Truffle Scallops', chef: 'Chef Ethan', category: 'Starters', comments: 15, image: 'https://via.placeholder.com/150' },
  { id: '7', name: 'Snails in Garlic–Herb Butter', chef: 'Chef Pierre', category: 'Starters', comments: 10, image: 'https://via.placeholder.com/150' },
  { id: '8', name: 'Goat\'s cheese rounds with honey, walnut, rocket and umeboshi', chef: 'Chef Olivia', category: 'Starters', comments: 13, image: 'https://via.placeholder.com/150' },

  <Text>Main Cousrse</Text>,
  { id: '9', name: 'Saffron risotto with forest mushrooms', chef: 'Chef Leo', category: 'Main Dish', comments: 30, image: 'https://via.placeholder.com/150' },
  { id: '10', name: 'Chicken tagine makful', chef: 'Chef Aisha', category: 'Main Dish', comments: 27, image: 'https://via.placeholder.com/150' },
  { id: '11', name: 'Tasmanian salmon fillet with Dutch carrot puree', chef: 'Chef Tom', category: 'Main Dish', comments: 25, image: 'https://via.placeholder.com/150' },
  { id: '12', name: 'Chinese chicken salad', chef: 'Chef Wei', category: 'Main Dish', comments: 20, image: 'https://via.placeholder.com/150' },
  { id: '13', name: 'British classic slow-cooked spaghetti bolognese', chef: 'Chef James', category: 'Main Dish', comments: 35, image: 'https://via.placeholder.com/150' },
  { id: '14', name: 'Spring carbonara', chef: 'Chef Lucia', category: 'Main Dish', comments: 28, image: 'https://via.placeholder.com/150' },
  { id: '15', name: 'Spaghetti with ham, ceps and black truffle', chef: 'Chef Marco', category: 'Main Dish', comments: 32, image: 'https://via.placeholder.com/150' },
  { id: '16', name: 'Seafood and chicken paella', chef: 'Chef Carlos', category: 'Main Dish', comments: 22, image: 'https://via.placeholder.com/150' },
  { id: '17', name: 'East Lothian beef, braised truffle barley and Scottish girolles', chef: 'Chef Stuart', category: 'Main Dish', comments: 15, image: 'https://via.placeholder.com/150' },
  { id: '18', name: 'Ravioli Di Erbette', chef: 'Chef Sofia', category: 'Main Dish', comments: 19, image: 'https://via.placeholder.com/150' },

  <Text>Desserts</Text>,
  { id: '19', name: 'Chocolate avocado mousse', chef: 'Chef Chloe', category: 'Dessert', comments: 25, image: 'https://via.placeholder.com/150' },
  { id: '20', name: 'Amalfi lemon tart', chef: 'Chef Giovanni', category: 'Dessert', comments: 20, image: 'https://via.placeholder.com/150' },
  { id: '21', name: 'All-American chocolate chip cookies', chef: 'Chef Lisa', category: 'Dessert', comments: 30, image: 'https://via.placeholder.com/150' },
  { id: '22', name: 'Comforting rice pudding dessert', chef: 'Chef Paul', category: 'Dessert', comments: 18, image: 'https://via.placeholder.com/150' },
  { id: '23', name: 'Tiramisu mocktail', chef: 'Chef Matteo', category: 'Dessert', comments: 28, image: 'https://via.placeholder.com/150' },
  { id: '24', name: 'Mini Frosted Pumpkin Cakes', chef: 'Chef Grace', category: 'Dessert', comments: 22, image: 'https://via.placeholder.com/150' },
  { id: '25', name: 'Mini Pavlova Cherries & Cream Cheese', chef: 'Chef Claire', category: 'Dessert', comments: 25, image: 'https://via.placeholder.com/150' },
  { id: '26', name: 'Caramelized Pineapple Upside Down Mini Cake', chef: 'Chef Raymond', category: 'Dessert', comments: 20, image: 'https://via.placeholder.com/150' },
];

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity><Text style={styles.tab}>Explore</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.tab}>Filter</Text></TouchableOpacity>
      </View>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dishCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text>{item.name}</Text>
              <Text>Chef: {item.chef}</Text>
              <Text>Category: {item.category}</Text>
              <Text>Comments: {item.comments}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};



export default MenuScreen;
