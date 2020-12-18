import React from "react";
import css from "./TodoItem.module.css";

const TodoItem = ({ item, isChecked, onDelete, index, onComplete }) => {
  return (
    <div className={css.item}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onComplete(index)}
      />
      <div className={css.chip}>{item}</div>
      <button
        onClick={() => {
          onDelete(index);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
