import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    h1{
        font-size: 50px;
        font-weight: 400;
        color: navy;
    }
    h3{
        font-size: 30px;
        font-weight: 600;
    }
    h4{
        font-size: 20px;
        font-weight: 500;
    }
`;

export default GlobalStyle;
