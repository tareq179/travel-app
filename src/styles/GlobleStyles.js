import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-track{
        background: transparent;
    }
    ::-webkit-scrollbar-thumb{
        background: #f26a2c;
        border-radius:25px;
    }
`