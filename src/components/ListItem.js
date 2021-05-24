import React from "react";

const ListItem = ({ todoTitle, id }) => {
    const handleClick = () => {
        console.log(id);
      };
  return (
    <>
      <li onClick={handleClick}>{todoTitle}</li>
    </>
  );
};

export default ListItem;
