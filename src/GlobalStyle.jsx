import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    h1{
        font-size: 50px;
        font-weight: 400;
        color: navy;
    }
`;

export default GlobalStyle;
