//BASICALLY THE SEARCHBAR
import axios from "axios";

//actiontypes
const FETCH_ALL_RECIPES = "FETCH_ALL_RECIPES";

//action creator
const fetchAllRecipes = (recipes) => {
  return {
    type: FETCH_ALL_RECIPES,
    payload: recipes,
  };
};

//const API_KEY = process.env.REACT_APP_SPOONACULAR_API;
const RECIPE_API_BASE = "https://api.spoonacular.com/recipes/search";

//thunk creators
export const fetchAllRecipesThunk = (searchTerm) => (dispatch) => {
  return axios
    .get(RECIPE_API_BASE, {
      params: {
        query: searchTerm,
        apiKey: "b2174079fceb4335a22508ae27c82eb6",
      },
    })
    .then((response) => response.data.results)
    .then((recipes) => dispatch(fetchAllRecipes(recipes)))
    .catch((err) => console.log(err));
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_RECIPES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
