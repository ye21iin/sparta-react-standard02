import React, { useState } from "react";
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

const AddBtn = styled.button`
  background-color: navy;
  color: white;
  font-size: 15px;
  padding: 10px;
`;

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, contents });
    setTitle("");
    setContents("");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <AddBtn type="submit">추가하기</AddBtn>
    </Form>
  );
};

export default TodoForm;
