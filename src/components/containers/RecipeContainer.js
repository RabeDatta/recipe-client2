import React from "react";
import { RecipeView } from "../views";

const RecipeContainer = (props) => {
  const recipeItems = props.recipe.map((recipe, index) => {
    return <RecipeView key={index} recipe={recipe.results} />;
  });

  return <div className="recipe-container">{recipeItems}</div>;
};

export default RecipeContainer;
