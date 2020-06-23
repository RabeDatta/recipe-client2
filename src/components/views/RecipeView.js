import React from "react";
const imageUrl = "https://spoonacular.com/recipeImages/";

const RecipeView = (props) => {
  return (
    <div className="Recipe">
      <a
        href={props.recipe.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <h3>{props.recipe.title}</h3>
      </a>

      <p> Time required: {props.recipe.readyInMinutes} </p>
      <p> Servings: {props.recipe.servings}</p>
      <p>
        <img src={imageUrl + props.recipe.image} alt="" />
      </p>
      <hr />
      <br></br>
      <button>Add</button>
      <button>Delete</button>
    </div>
  );
};

export default RecipeView;
