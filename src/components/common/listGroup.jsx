import React from "react";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;
  const genres = items.map((item) => {
    return (
      <li
        key={item[valueProperty]}
        className={
          item === selectedItem ? "list-group-item active" : "list-group-item"
        }
        style={{ cursor: "pointer" }}
        onClick={() => onItemSelect(item)}
      >
        {item[textProperty]}
      </li>
    );
  });
  return <ul className="list-group">{genres}</ul>;
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
