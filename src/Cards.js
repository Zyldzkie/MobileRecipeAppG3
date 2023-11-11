import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ recipe }) => {
  const navigation = useNavigation();

  const handleRecipeCardPress = () => {
    navigation.navigate("Recipe", { recipe });
  };

  const handleHeartIconPress = () => {
    console.log("Heart icon clicked!");
  };

  return (
    <TouchableOpacity onPress={handleRecipeCardPress} style={styles.cardContainer}>
      <Image source={recipe.image} style={styles.image} />
      <TouchableOpacity onPress={handleHeartIconPress} style={styles.heartContainer}>
        <View style={styles.heartShadow} />
        <Image source={require("./img/heart.png")} style={styles.heart} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
          <Text>Cooking Time: {recipe.cookingTime}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text>Origin: {recipe.originCountry}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 350,
    height: 180,
  },
  textContainer: {
    padding: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  heartContainer: {
    position: 'absolute',
    right: 7,
    top: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartShadow: {
    position: 'absolute',
    width: 45,
    height: 40,
    borderRadius: 30 / 2,
    backgroundColor: 'black',
    opacity: 0.50,
  },
  heart: {
    height: 35,
    width: 35,
    zIndex: 1,
  },
});

export default Cards;
