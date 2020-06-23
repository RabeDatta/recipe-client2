import React from "react";

//handle logout 
const AllBookmarksView = (props) => {
  const { handleLogout } = props;
  return (
    <div>
      <h1>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      {props.allBookmarks.map((bookmark) => (
        <div key={bookmark.id}>{bookmark.recipeId}</div>
      ))}
    </div>
  );
};

export default AllBookmarksView;
