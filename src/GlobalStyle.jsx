import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        margin: 30px;
    }
    h1{
        font-size: 50px;
        font-weight: 400;
        color: navy;
        margin-bottom: 20px;
    }
    h3{
        font-size: 30px;
        font-weight: 600;
    }
    h4{
        font-size: 20px;
        font-weight: 500;
    }
    button{
        font-size: 13px;
        border: 1px solid black;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover{
        background-color: yellow;
    }
`;

export default GlobalStyle;
