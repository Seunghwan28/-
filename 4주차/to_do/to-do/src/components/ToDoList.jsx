import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/actions';

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => dispatch(removeTodo(index))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
