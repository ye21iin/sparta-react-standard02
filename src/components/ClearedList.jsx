import React from "react";
import { BoxContainer, Box, DeleteBtn, Button } from "../ListStyles.jsx";

const ClearedList = ({ props }) => {
  const { todos, setTodos, cleared, setCleared } = props;

  const handleDelete = (id) => {
    const subject = !todos.find((x) => x.id === id) ? cleared : todos;
    const deletedTodos = subject.filter((el) => {
      return el.id !== id;
    });
    subject === todos ? setTodos(deletedTodos) : setCleared(deletedTodos);
  };

  const handleCancel = (id) => {
    const cancelled = cleared.find((x) => x.id === id);
    const newCleared = cleared.filter((el) => {
      return el.id !== id;
    });
    setCleared(newCleared);
    setTodos([...todos, cancelled]);
  };

  return (
    <BoxContainer>
      {cleared.map((clear) => {
        return (
          <Box key={clear.id}>
            <h4>{clear.title}</h4>
            <p>{clear.contents}</p>
            <DeleteBtn onClick={() => handleDelete(clear.id)}>
              삭제하기
            </DeleteBtn>
            <Button onClick={() => handleCancel(clear.id)}>취소</Button>
          </Box>
        );
      })}
    </BoxContainer>
  );
};

export default ClearedList;
