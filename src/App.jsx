import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ClearedList from "./components/ClearedList";

const List = styled.div`
  padding: 20px;
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
    },
  ]);

  const [cleared, setCleared] = useState([
    {
      id: 3,
      title: "리덕스 공부하기",
      contents: "리덕스 기초를 공부해봅시다.",
    },
  ]);

  const handleAddTodo = ({ title, contents }) => {
    if (!title || !contents) {
      alert("제목과 내용이 모두 입력되지 않았습니다.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      contents,
    };
    setTodos([...todos, newTodo]);
  };

  const props = { todos, setTodos, cleared, setCleared };

  return (
    <>
      <GlobalStyle />
      <h1>My Todo List</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <List>
        <h3>Working.. 🔥</h3>
        <TodoList props={props} />
      </List>
      <List>
        <h3>Done..! 🎉</h3>
        <ClearedList props={props} />
      </List>
    </>
  );
}

export default App;
