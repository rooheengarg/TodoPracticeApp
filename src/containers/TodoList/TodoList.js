import React, { useState, useEffect, useRef } from "react";
import css from "./TodoList.module.css";
import TodoItem from "../../components/TodoItem/TodoItem";

const TodoList = () => {
  const [items, addItem] = useState([]);
  const [itemList, resetItemList] = useState(null);
  const inputEl = useRef(null);

  const onDelete = (index) => {
    let newItems = items.filter((_, i) => index != i);
    addItem(newItems);
  };

  const onComplete = (index) => {
    let newItems = items.map((el, i) => {
      if (index === i) {
        return {
          ...el,
          isChecked: !el.isChecked,
        };
      } else return el;
    });
    addItem(newItems);
  };

  const createItemList = () => {
    return items.map((item, index) => {
      return (
        <TodoItem
          key={index}
          index={index}
          item={item.value}
          isChecked={item.isChecked}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      );
    });
  };

  useEffect(() => {
    let list = createItemList();
    resetItemList(list);
  }, [items]);

  const onItemSubmit = () => {
    if (inputEl.current.value.trim()) {
      const newItems = [
        ...items,
        { value: inputEl.current.value.trim(), isChecked: false },
      ];
      addItem(newItems);
    }
    inputEl.current.value = "";
  };

  return (
    <div>
      <h1>It's a Todo list :D</h1>
      <input
        ref={inputEl}
        className=""
        type="text"
        placeholder="Enter todo item"
      />
      <button onClick={onItemSubmit}>Submit</button>
      {itemList && <div>{itemList}</div>}
    </div>
  );
};

export default TodoList;
