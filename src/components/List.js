import React from "react";
import ListItem from "./ListItem";
const List = ({ todosArray }) => {
  const newTodos = todosArray.map((elem, i) => {
    return <ListItem key={i} id={elem.id} todoTitle={elem.todo} />;
  });
  return (
    <>
      <ul>{newTodos}</ul>
    </>
  );
};

export default List;
