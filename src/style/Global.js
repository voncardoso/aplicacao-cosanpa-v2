import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     :root{
        --whithe: #FFFFFF,
        --background: #F1F0F5,
        --green: #2FB0C6,
        --green-houver: #66BAC8,
        --green-200: #49C06C,
        --yellow: #FCCD06,
        --text-1: #262628,
        --red: #F26B66,
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px #262628;
    }

    body{
        background-color: #F1F0F5;
        color: #262628;
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font: 400 1rem Nunito, sans-serif;
    }
`;
