import styled from "styled-components";

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

export { BoxContainer, Box, DeleteBtn, Button };
