import { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/data";
import MealsList from "../components/MealsList/MealsList";

// function renderCategoryItem(itemData) {
//   return (
//     <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
//   );
// }
function MealsOverviewScreen({ route, navigation }) {
  // we can use hook useRoute instead of prop 'route' and it will be the same behavior:
  // const route = useRoute();

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // When we use this hook here the header title is changing too slow, after the page appeared, that's whu=y we can use another hook 'useLayoutEffect'
  //   useEffect(() => {
  //     const categoryTitle = CATEGORIES.find(
  //       (category) => category.id === catId
  //     ).title;

  //     navigation.setOptions({ title: categoryTitle });
  //   }, [catId, navigation]);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
