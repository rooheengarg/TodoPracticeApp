import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./containers/TodoList/TodoList";

const App = () => {
  return (
    <>
      <div>======Create React app ====</div>
      <TodoList />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
