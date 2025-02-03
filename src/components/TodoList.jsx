import React from "react";
import { BoxContainer, Box, DeleteBtn, Button } from "../ListStyles.jsx";

const TodoList = ({ props }) => {
  const { todos, setTodos, cleared, setCleared } = props;

  const handleDelete = (id) => {
    const subject = !todos.find((x) => x.id === id) ? cleared : todos;
    const deletedTodos = subject.filter((el) => {
      return el.id !== id;
    });
    subject === todos ? setTodos(deletedTodos) : setCleared(deletedTodos);
  };

  const handleComplete = (id) => {
    const completed = todos.find((x) => x.id === id);
    const newTodos = todos.filter((el) => {
      return el.id !== id;
    });
    setTodos(newTodos);
    setCleared([...cleared, completed]);
  };

  return (
    <BoxContainer>
      {todos.map((todo) => {
        return (
          <Box key={todo.id}>
            <h4>{todo.title}</h4>
            <p>{todo.contents}</p>
            <Button onClick={() => handleComplete(todo.id)}>완료</Button>
            <DeleteBtn onClick={() => handleDelete(todo.id)}>
              삭제하기
            </DeleteBtn>
          </Box>
        );
      })}
    </BoxContainer>
  );
};

export default TodoList;
