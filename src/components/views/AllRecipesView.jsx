import React from "react";
import { AddBookmarkContainer } from "../containers";
const imageUrl = "https://spoonacular.com/recipeImages/";

// search page results

const AllRecipesView = (props) => {
  return (
    <div className="all-recipes">
      {props.recipes.map((recipe) => (
        <div key={recipe.id}>
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
            {" "}
            <h3>{recipe.title}</h3>
          </a>
          <img
            src={imageUrl + recipe.image}
            alt=""
            style={{
              width: "300px",
              height: "300px",
              objectFit: "fit",
              display: "block",
              position: "relative",
              boxShadow: "0 10px 10px rgba(0,0,0,.7)",
              padding: "5px",
            }}
          />
          <p> ReadyInMinutes: {recipe.readyInMinutes} </p>
          <p> Servings: {recipe.servings}</p>
          <hr />
          <br></br>
          <AddBookmarkContainer recipeId={recipe.id} />
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AllRecipesView;
