import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }
  return (
    <i
      onClick={props.onlike}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default Like;
