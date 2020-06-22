import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllReviewsThunk } from "../../thunks";
import { AllReviewsView } from "../views";

class AllReviewsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllReviews();
  }
  render() {
    return (
      //<h1>Hello AllReviewsContainer</h1>
      <AllReviewsView allReviews={this.props.allReviews} />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allReviews: state.allReviews,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllReviews: () => dispatch(fetchAllReviewsThunk()),
  };
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllReviewsContainer);