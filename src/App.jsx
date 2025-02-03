import { useState } from "react";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <h1>App 컴포넌트</h1>
    </>
  );
}

export default App;
