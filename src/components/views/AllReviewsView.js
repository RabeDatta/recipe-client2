import React from "react";
import {LogoutButtonContainer} from "../containers"

//logout 

const AllReviewsView = (props) => {
  const { handleLogout } = props;
  return (
    <div>
      <h1>
        <LogoutButtonContainer />
      </h1>
      {props.allReviews.map((review) => (
        <div key={review.id}>{review.description}</div>
      ))}
    </div>
  );
};

export default AllReviewsView;
