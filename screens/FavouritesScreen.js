import { StyleSheet, View, Text } from "react-native";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/data";
import MealsList from "../components/MealsList/MealsList";
// import CategoryGridTile from "../components/CategoryGridTile";
// import { CATEGORIES } from "../data/data";

function FavouritesScreen() {

  const favouritedMealIds = useSelector(state => state.favouriteMeals.ids);
  // This is for useContext
  // const favouritedMealsContext = useContext(FavouritesContext);

  const favouritedMeals = MEALS.filter((mealId) => {
    // return favouritedMealsContext.ids.includes(mealId.id);
    return favouritedMealIds.includes(mealId.id);
  });

  if (favouritedMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet!</Text>
      </View>
    );
  }

  return <MealsList items={favouritedMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
