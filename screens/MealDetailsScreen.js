import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/data";
import { useSelector, useDispatch } from "react-redux";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";
import { addFavourite, removeFavourite } from "../store/redux/favourites";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const displayedMealDetails = MEALS.find((meal) => meal.id === mealId);

  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const dispatch = useDispatch();
  // This is for useContext
  // const favouriteMealsContext = useContext(FavouritesContext);
  // const mealIsFavourited = favouriteMealsContext.ids.includes(mealId);

  const mealIsFavourited = favouriteMealIds.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourited) {
      // favouriteMealsContext.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // favouriteMealsContext.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    const mealTitle = displayedMealDetails.title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourited ? "favorite" : "favorite-border"}
            onPress={changeFavouriteStatusHandler}
            color={"#ffffff"}
          />
        );
      },
    });
  }, [navigation, displayedMealDetails, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{ uri: displayedMealDetails.imageUrl }}
        style={styles.image}
      />
      <Text style={styles.title}>{displayedMealDetails.title}</Text>
      <MealDetails
        duration={displayedMealDetails.duration}
        affordability={displayedMealDetails.affordability}
        complexity={displayedMealDetails.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={displayedMealDetails.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={displayedMealDetails.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "#ffffff",
  },
  detailText: {
    color: "#ffffff",
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 32,
  },
});
