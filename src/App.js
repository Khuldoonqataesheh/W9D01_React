import React from 'react';
import List from './components/List';
const todos = [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}]


const App = () => {
  const newTodos = todos.map((elem, i) => {
    return <List key={elem.id} order={i} taskTitle={elem.todo} />;
  });
  return  <div>
    <h1>hello world</h1>
    {newTodos}
    </div>;
};

export default App