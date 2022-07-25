import React, { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favouritedMeals, setFavouritedMeals] = useState([]);

  function addFavourite(id) {
    setFavouritedMeals((currentFavourites) => [...currentFavourites, id]);
  }

  function removeFavourite(id) {
    setFavouritedMeals((currentFavourites) =>
      currentFavourites.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouritedMeals,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
