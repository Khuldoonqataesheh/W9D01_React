import React from "react";
import List from "./components/List";
import ListItem from "./components/ListItem";

const todos = [
  { todo: "wake up", id: 1 },
  { todo: "breakfast", id: 2 },
  { todo: "study", id: 3 },
];

const App = () => {
  return (
    <div>
      <h1>hello world</h1>
      <List todosArray={todos} />
    </div>
  );
};

export default App;
