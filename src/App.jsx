import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Form = styled.form`
  background-color: lightgrey;
  height: 40px;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const List = styled.div`
  padding: 20px;
`;

const BoxContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const Box = styled.div`
  width: 250px;
  height: 150px;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;

  display: grid;
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
    },
    {
      id: 2,
      title: "리덕스 공부하기",
      contents: "리덕스 기초를 공부해봅시다.",
    },
  ]);
  const [cleared, setCleared] = useState([
    {
      id: 3,
      title: "리덕스 공부하기",
      contents: "리덕스 기초를 공부해봅시다.",
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <h1>My Todo List</h1>
      <Form>
        <div>
          <label>
            제목
            <input />
          </label>
          <label>
            내용
            <input />
          </label>
        </div>
        <button>추가하기</button>
      </Form>
      <List>
        <h3>Working.. 🔥</h3>
        <BoxContainer>
          {todos.map((todo) => {
            return (
              <Box key={todo.id}>
                <h4>{todo.title}</h4>
                <p>{todo.contents}</p>
                <button>완료</button>
                <button>삭제하기</button>
              </Box>
            );
          })}
        </BoxContainer>
      </List>
      <List>
        <h3>Done..! 🎉</h3>
        <BoxContainer>
          {cleared.map((clear) => {
            return (
              <Box key={clear.id}>
                <h4>{clear.title}</h4>
                <p>{clear.contents}</p>
                <button>삭제하기</button>
                <button>취소</button>
              </Box>
            );
          })}
        </BoxContainer>
      </List>
    </>
  );
}

export default App;
