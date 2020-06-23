import React, { Component } from "react";
import { RecipeView } from "../views";
import { fetchRecipeThunk } from "../../thunks";
import { connect } from "react-redux";

class SingleRecipeContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  render() {
    return (
      <div className="single-recipe-container">
        <RecipeView recipe={this.props.recipe} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    recipe: state.recipe,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRecipe: (id) => dispatch(fetchRecipeThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleRecipeContainer);
