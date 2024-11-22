import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const initialDishes = [
  { id: '1', name: 'Pickled jalapeños, prawn ceviche and avocado purée', chef: 'Chef Anna', category: 'Starters', comments: 25, price: 12.99 },
  { id: '2', name: 'Beef Tartare', chef: 'Chef John', category: 'Starters', comments: 18, price: 14.50 },
  { id: '3', name: 'Foie Gras Torchon Recipe', chef: 'Chef Marie', category: 'Starters', comments: 22, price: 18.75 },
  { id: '4', name: 'Octopus, chorizo and pickled purple carrots', chef: 'Chef Juan', category: 'Starters', comments: 19, price: 15.99 },
  { id: '5', name: 'Oysters Rockefeller', chef: 'Chef Emily', category: 'Starters', comments: 21, price: 13.99 },
  { id: '6', name: 'Seared Truffle Scallops', chef: 'Chef Ethan', category: 'Starters', comments: 15, price: 20.99 },
  { id: '7', name: 'Snails in Garlic–Herb Butter', chef: 'Chef Pierre', category: 'Starters', comments: 10, price: 11.50 },
  { id: '8', name: "Goat's cheese rounds with honey, walnut, rocket and umeboshi", chef: 'Chef Olivia', category: 'Starters', comments: 13, price: 9.99 },
  
  { id: '9', name: 'Saffron risotto with forest mushrooms', chef: 'Chef Leo', category: 'Main Dish', comments: 30, price: 25.99 },
  { id: '10', name: 'Chicken tagine makful', chef: 'Chef Aisha', category: 'Main Dish', comments: 27, price: 22.50 },
  { id: '11', name: 'Tasmanian salmon fillet with Dutch carrot puree', chef: 'Chef Tom', category: 'Main Dish', comments: 25, price: 28.75 },
  { id: '12', name: 'Chinese chicken salad', chef: 'Chef Wei', category: 'Main Dish', comments: 20, price: 19.99 },
  { id: '13', name: 'British classic slow-cooked spaghetti bolognese', chef: 'Chef James', category: 'Main Dish', comments: 35, price: 18.99 },
  { id: '14', name: 'Spring carbonara', chef: 'Chef Lucia', category: 'Main Dish', comments: 28, price: 16.50 },
  { id: '15', name: 'Spaghetti with ham, ceps and black truffle', chef: 'Chef Marco', category: 'Main Dish', comments: 32, price: 21.75 },
  { id: '16', name: 'Seafood and chicken paella', chef: 'Chef Carlos', category: 'Main Dish', comments: 22, price: 23.99 },
  { id: '17', name: 'East Lothian beef, braised truffle barley and Scottish girolles', chef: 'Chef Stuart', category: 'Main Dish', comments: 15, price: 26.99 },
  { id: '18', name: 'Ravioli Di Erbette', chef: 'Chef Sofia', category: 'Main Dish', comments: 19, price: 17.99 },

  { id: '19', name: 'Chocolate avocado mousse', chef: 'Chef Chloe', category: 'Dessert', comments: 25, price: 8.99 },
  { id: '20', name: 'Amalfi lemon tart', chef: 'Chef Giovanni', category: 'Dessert', comments: 20, price: 6.50 },
  { id: '21', name: 'All-American chocolate chip cookies', chef: 'Chef Lisa', category: 'Dessert', comments: 30, price: 7.99 },
  { id: '22', name: 'Comforting rice pudding dessert', chef: 'Chef Paul', category: 'Dessert', comments: 18, price: 5.99 },
  { id: '23', name: 'Tiramisu mocktail', chef: 'Chef Matteo', category: 'Dessert', comments: 28, price: 6.99 },
  { id: '24', name: 'Mini Frosted Pumpkin Cakes', chef: 'Chef Grace', category: 'Dessert', comments: 22, price: 7.50 },
  { id: '25', name: 'Mini Pavlova Cherries & Cream Cheese', chef: 'Chef Claire', category: 'Dessert', comments: 25, price: 9.99 },
  { id: '26', name: 'Caramelized Pineapple Upside Down Mini Cake', chef: 'Chef Raymond', category: 'Dessert', comments: 20, price: 10.50 },
];


const EditMenuScreen = () => {
  const [dishes, setDishes] = useState(initialDishes);
  const [selectedDish, setSelectedDish] = useState(null);
  const [formValues, setFormValues] = useState({ name: '', chef: '', category: '', comments: '', price: '' });

  const handleSelectDish = (dish) => {
    setSelectedDish(dish);
    setFormValues(dish);
  };

  const handleInputChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const handleSaveChanges = () => {
    setDishes(dishes.map((dish) => (dish.id === selectedDish.id ? { ...selectedDish, ...formValues } : dish)));
    setSelectedDish(null);
  };

  const handleCancelEdit = () => {
    setSelectedDish(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Management</Text>

      
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectDish(item)} style={styles.dishItem}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishDetails}>Chef: {item.chef}</Text>
            <Text style={styles.dishDetails}>Category: {item.category}</Text>
            <Text style={styles.dishDetails}>Comments: {item.comments}</Text>
            <Text style={styles.dishDetails}>Price: ${item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />

 
      {selectedDish && (
        <View style={styles.editForm}>
          <Text style={styles.formTitle}>Editing: {selectedDish.name}</Text>

          <TextInput
            style={styles.input}
            value={formValues.name}
            placeholder="Dish Name"
            onChangeText={(text) => handleInputChange('name', text)}
          />

          <TextInput
            style={styles.input}
            value={formValues.chef}
            placeholder="Chef Name"
            onChangeText={(text) => handleInputChange('chef', text)}
          />

          <TextInput
            style={styles.input}
            value={formValues.category}
            placeholder="Category"
            onChangeText={(text) => handleInputChange('category', text)}
          />

          <TextInput
            style={styles.input}
            value={String(formValues.comments)}
            placeholder="Comments"
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('comments', text)}
          />

          <TextInput
            style={styles.input}
            value={String(formValues.price)}
            placeholder="Price"
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('price', text)}
          />

          <Button title="Save Changes" onPress={handleSaveChanges} />
          <Button title="Cancel" onPress={handleCancelEdit} />
        </View>
      )}
    </View>
  );
};

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

export default EditMenuScreen;