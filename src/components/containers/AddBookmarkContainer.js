import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBookmarkThunk } from "../../thunks";

const AddBookmarkContainer = (props) => {
  const handleAdd = (e) => {
    e.preventDefault();
    props.addBookmark(props.recipeId);
  };
  return <button onClick={handleAdd}>add </button>;
};

const mapDispatch = (dispatch) => {
  return {
    addBookmark: (id) => dispatch(addBookmarkThunk(id)),
  };
};

AddBookmarkContainer.propTypes = {
  recipeId: PropTypes.string,
};

export default connect(null, mapDispatch)(AddBookmarkContainer);
