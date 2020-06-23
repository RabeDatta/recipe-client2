//SEARCH BY ID
import axios from "axios";

//ACTION TYPES
const FETCH_RECIPE = "FETCH_RECIPE";

//ACTION CREATOR
const fetchRecipe = (recipe) => {
  return {
    type: FETCH_RECIPE,
    payload: recipe,
  };
};

const API_KEY = process.env.REACT_APP_SPOONACULAR_API;
const RECIPE_API_BASE = "https://api.spoonacular.com/recipes/search";
// https://api.spoonacular.com/recipes/716429/information?apiKey=8c1e6e74f9eb44f6b8f43b81ef41f597

//THUNK CREATORS
export const fetchRecipeThunk = (id) => (dispatch) => {
  return axios
    .get("https://api.spoonacular.com/recipes/${id}/information", {
      params: {
        apiKey: "8c1e6e74f9eb44f6b8f43b81ef41f597",
      },
    })
    .then((response) => response.data.results)
    .then((recipe) => dispatch(fetchRecipe(recipe)))
    .catch((err) => console.log(err));
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RECIPE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
