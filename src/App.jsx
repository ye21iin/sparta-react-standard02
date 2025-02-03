import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Form = styled.form`
  background-color: lightgrey;
  height: 40px;
  margin: 10px;
  padding: 20px 70px 20px 20px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
`;

const List = styled.div`
  padding: 20px;
`;

const BoxContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
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

const DeleteBtn = styled.button`
  color: red;
`;

const Button = styled.button`
  color: blue;
`;

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !contents) {
      alert("제목과 내용이 모두 입력되지 않았습니다.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title,
      contents: contents,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setContents("");
  };

  const handleDelete = (id) => {
    const subject = !todos.find((x) => x.id === id) ? cleared : todos;
    const deletedTodos = subject.filter((el) => {
      return el.id !== id;
    });
    setTodos(deletedTodos);
  };

  return (
    <>
      <GlobalStyle />
      <h1>My Todo List</h1>
      <Form onSubmit={handleSubmit}>
        {/* 입력 폼 */}
        <InputContainer>
          <label>
            제목
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            내용
            <input
              value={contents}
              onChange={(e) => setContents(e.target.value)}
            />
          </label>
        </InputContainer>
        <button type="submit">추가하기</button>
      </Form>

      <List>
        {/* 진행 중 투두리스트 */}
        <h3>Working.. 🔥</h3>
        <BoxContainer>
          {todos.map((todo) => {
            return (
              <Box key={todo.id}>
                <h4>{todo.title}</h4>
                <p>{todo.contents}</p>
                <Button>완료</Button>
                <DeleteBtn onClick={() => handleDelete(todo.id)}>
                  삭제하기
                </DeleteBtn>
              </Box>
            );
          })}
        </BoxContainer>
      </List>
      <List>
        {/* 완료된 투두리스트 */}
        <h3>Done..! 🎉</h3>
        <BoxContainer>
          {cleared.map((clear) => {
            return (
              <Box key={clear.id}>
                <h4>{clear.title}</h4>
                <p>{clear.contents}</p>
                <DeleteBtn onClick={() => handleDelete(clear.id)}>
                  삭제하기
                </DeleteBtn>
                <Button>취소</Button>
              </Box>
            );
          })}
        </BoxContainer>
      </List>
    </>
  );
}

export default App;
