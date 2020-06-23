// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as user } from "../store/utilities/user";
export { default as allBookmarks } from "../store/utilities/allBookmarks";
export { default as allRecipes } from "../store/utilities/allRecipes";
export { default as allReviews } from "../store/utilities/allReviews";
export { default as recipe } from "../store/utilities/recipe";
